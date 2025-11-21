"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const HEIGHT = 30;

  useEffect(() => {
    setMounted(true);
  }, []);

  const srcLight = "/images/logos/osppy_white_blue.png";
  const srcDark = "/images/logos/osppy-dark.png";

  if (!mounted) {
    return (
      <Image
        src={srcLight}
        alt="OSPPY"
        height={HEIGHT}
        width={HEIGHT * 4}
        priority
      />
    );
  }

  const showDark = theme === "dark";

  return (
    <div
      className="relative flex items-center"
      style={{
        height: HEIGHT,
        width: HEIGHT * 4,
      }}
    > 
      <AnimatePresence mode="wait">
        <motion.div
          key={showDark ? "dark" : "light"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center"
        >
          <Image
            src={showDark ? srcLight : srcDark}
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

