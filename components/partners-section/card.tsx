import { motion } from "framer-motion";
import { memo } from "react";
interface CardProps {
  image: string;
}

const onHover = { backgroundColor: "rgba(0,0,0,0.1)" };

const Card = memo(({ image }: CardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden w-48 h-full flex justify-center items-center rounded-xl"
      key={image}
      whileHover={onHover}
    >
      <img
        loading="lazy"
        src={image}
        alt={image}
        className="h-40 aspect-square object-contain"
      />
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;
