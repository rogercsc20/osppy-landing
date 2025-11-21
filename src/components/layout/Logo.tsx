"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function Logo() {
  const { resolvedTheme } = useTheme();

  const HEIGHT = 30;

  const LIGHT_LOGO = "/images/logos/osppy_white_blue.png";
  const DARK_LOGO = "/images/logos/osppy-dark.png";

  // Dark-only UI right now → we want the light logo on dark background.
  const effectiveTheme = resolvedTheme ?? "dark";
  const useLightLogo = effectiveTheme === "dark";
  const logoSrc = useLightLogo ? LIGHT_LOGO : DARK_LOGO;

  return (
    <div
      className="relative flex items-center"
      style={{ height: HEIGHT, width: HEIGHT * 4 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={logoSrc}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center"
        >
          <Image
            src={logoSrc}
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

