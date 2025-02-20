import { memo } from "react";
import { motion } from "framer-motion";
export const LineAnimation = memo(() => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ amount: 1, once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      }}
      className="absolute top-0 right-0 h-1 bg-secondary rounded-md"
    />
  );
});

LineAnimation.displayName = "LineAnimation";
