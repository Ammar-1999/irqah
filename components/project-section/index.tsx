import { memo } from "react";
import { LineAnimation } from "../ui/line-animation";
import { BlurFade } from "../ui/blur-fade";
import ProjectCard from "./card";
import { fadeIn } from "../hero-section/animation";
import { Link } from "../ui/link";
import MoreArrow from "../icons/moreArrow";
import { motion } from "framer-motion";
const content = [
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
    location: "الرياض شارع الاندلس",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
    location: "الرياض شارع الاندلس",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
    location: "الرياض شارع الاندلس",
  },
];
const viewport = { once: true, amount: 0.5 };

const ProjectSection = memo(() => {
  return (
    <section className="mb-between-sections relative overflow-hidden container">
      <div className="relative w-fit mx-auto">
        <LineAnimation />
        <BlurFade inViewMargin="-50px" inView>
          <h3 className="text-section-title font-semibold text-primary pt-3 pb-2">
            البرامج والمشاريع
          </h3>
        </BlurFade>
      </div>
      <div className="flex flex-wrap justify-center gap-6 my-4">
        {content.map((item, index) => (
          <ProjectCard key={index} {...item} index={index} />
        ))}
      </div>
      <motion.div
        custom={0.5}
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        className="mr-auto w-fit mt-8"
      >
        <Link
          variant="moreSecondary"
          href="/#"
          className="flex items-center justify-center py-6"
        >
          <p className="text-CTA md:font-semibold">المزيد</p>
          <MoreArrow />
        </Link>
      </motion.div>
    </section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
