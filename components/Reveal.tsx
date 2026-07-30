"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  trigger?: "view" | "load";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  x = 0,
  trigger = "view",
}: RevealProps) {
  const animationProp =
    trigger === "load"
      ? { animate: { opacity: 1, y: 0, x: 0 } }
      : { whileInView: { opacity: 1, y: 0, x: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      {...animationProp}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
