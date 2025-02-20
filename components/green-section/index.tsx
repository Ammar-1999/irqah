import { motion, useInView } from "framer-motion";
import { ease, heroContentVariants } from "../hero-section/animation";
import { memo, useRef } from "react";
const dashViewport = {
  margin: "-50px",
  once: true
};

const logoVariants = {
  initial: { opacity: 0, y: -20, scale: 0.5 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};
const transition = { duration: 0.7, ease };
export default memo(function GreenSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true
  });
  
  return (
    <section ref={ref} className="bg-primary w-full h-80 md:h-96 mb-between-sections relative overflow-hidden">
      <motion.img
        custom={isInView}
        animate={{ opacity: isInView ? 1 : 0.5, y: isInView ? 0 : -300 }}
        transition={transition}
        src="/images/dash.png"
        alt="dash"
        className="absolute opacity-50 top-0 left-0 h-[90%] object-cover w-full"
        loading="lazy"
      />
      <div className="container flex flex-col justify-center h-full items-center gap-1 md:gap-6 relative">
        <motion.img
          variants={logoVariants}
          initial="initial"
          whileInView="animate"
          viewport={dashViewport}
          src="/images/green-section.png"
          alt="logo"
          className="w-24 md:w-32 aspect-square object-contain z-[1]"
          loading="lazy"
        />
        <div className="relative z-[1]">
          <motion.h3
            variants={heroContentVariants}
            initial="initial"
            whileInView="animate"
            viewport={dashViewport}
            className="text-section-title font-semibold text-foreground py-4"
          >
            نرصد حاجة ..نحفظ كرامة الانسان
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
            className="absolute bottom-0 right-1/2 translate-x-1/2 h-1 bg-secondary rounded-md"
          />
        </div>
        <motion.img
          animate={{ opacity: isInView ? 1 : 0.5, y: isInView ? 0 : 300 }}
          transition={transition}
          src="/images/green-section-2.webp"
          alt="image"
          className="absolute bottom-0 left-0 mix-blend-overlay w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
});
