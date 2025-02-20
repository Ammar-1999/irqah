import { memo } from "react";
import { spring } from "../hero-section/animation";
import { motion } from "framer-motion";
import LocationIcon from "../icons/location";
const variants = {
  inView: { opacity: 1, x: 0 },
  outView: { opacity: 0, x: 50 },
};

const ProjectCard = memo(
  ({
    imageSrc,
    title,
    description,
    date,
    index,
    location,
  }: {
    imageSrc: string;
    title: string;
    description: string;
    date: string;
    index: number;
    location: string;
  }) => {
    return (
      <motion.div
        animate={variants}
        transition={{ ...spring, delay: index * 0.2 }}
        className="relative w-full md:w-[calc(50%-.75rem)] lg:w-[calc(33.333%-1rem)] min-w-[280px] overflow-hidden bg-card rounded-1xl shadow hover:shadow-md focus:shadow-md transition-shadow duration-300"
      >
        <img loading="lazy" src={imageSrc} alt={title} className="object-cover h-72 w-full" />
        <div className="pt-3 pb-4 px-5">
          <div className="absolute top-4 right-6 flex items-center gap-2 bg-primary/50 rounded-full px-4 py-2 text-foreground text-small">
            <LocationIcon />
            <p>{location}</p>
          </div>
          <div className="text-secondary text-p">{date}</div>
          <div className="text-card-foreground font-semibold text-subtitle my-2">
            {title}
          </div>
          <div className="text-lightGray text-p">{description}</div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
