"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const isClient = typeof window !== "undefined";

  const HEIGHT = 30;

  const srcLight = "/images/logos/osppy_white_blue.png";
  const srcDark = "/images/logos/osppy-dark.png";

  const showDarkLogo = resolvedTheme === "dark"; 
  // DARK background → light logo

  return (
    <div
      className="relative flex items-center"
      style={{ height: HEIGHT, width: HEIGHT * 4 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isClient ? (showDarkLogo ? "light" : "dark") : "ssr"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center"
        >
          <Image
            // SSR ALWAYS uses LIGHT LOGO
            src={showDarkLogo ? srcLight : srcDark}
            alt="OSPPY"
            height={HEIGHT}
            width={HEIGHT * 4}
            priority
            className="select-none"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

