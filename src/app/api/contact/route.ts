import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple email validator
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // ----------- SAFETY LAYER 1: Ensure body exists -----------
    const raw = await req.text();

    if (!raw || raw.trim() === "") {
      console.warn("❌ Empty request body");
      return NextResponse.json(
        { success: false, error: "Empty request body" },
        { status: 400 }
      );
    }

    // ----------- SAFETY LAYER 2: Ensure JSON is valid ----------
    let data: ContactPayload;
    try {
      data = JSON.parse(raw) as ContactPayload;
    } catch (err) {
      console.warn("❌ Invalid JSON received", err);
      return NextResponse.json(
        { success: false, error: "Invalid JSON" },
        { status: 400 }
      );
    }

    const { name, email, message } = data || {};

    // ----------- SAFETY LAYER 3: Validate required fields -------
    if (!name || !email || !message) {
      console.warn("❌ Missing required fields", { name, email, message });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ----------- SAFETY LAYER 4: Validate email -----------------
    if (!isValidEmail(email)) {
      console.warn("❌ Invalid email:", email);
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // ----------- SAFETY LAYER 5: Anti-spam / sanity limits -----
    if (message.length > 2000) {
      console.warn("❌ Message too long");
      return NextResponse.json(
        { success: false, error: "Message too long" },
        { status: 413 }
      );
    }

    // ----------- SEND EMAIL ------------------------------------
    await resend.emails.send({
      from: "OSPPY <hello@osppy.com>",
      to: ["hello@osppy.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New OSPPY Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("✅ Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Server error in contact route:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

