"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={false}  
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, delay }}
      style={{ opacity: 0, transform: "translateY(12px)" }} // SSR-safe static styles
    >
      {children}
    </motion.div>
  );
}

