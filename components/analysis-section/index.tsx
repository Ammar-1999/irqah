import { memo, useRef } from "react";
import AnalysisIcon2 from "../icons/analysis-2";
import AnalysisIcon1 from "../icons/analysis-1";
import AnalysisIcon3 from "../icons/analysis-3";
import AnalysisIcon4 from "../icons/analysis-4";
import AnalysisIcon5 from "../icons/analysis-5";
import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { analysis } from "../hero-section/animation";
import AnalysisIcon from "./icon";
const analysisCards = [
  {
    className:
      "border-l-[.3rem] w-[3.8rem] md:w-[4.3rem] border-primary bg-card-1 text-primary",
    icon: <AnalysisIcon1 />,
    value: 987656,
    title: "فرصة عمل",
  },
  {
    className:
      "border-r-[.3rem] w-[3.8rem] md:w-[4.3rem] border-secondary bg-card-2 text-secondary",
    icon: <AnalysisIcon2 />,
    value: 123459,
    title: "قيمة المساعدات بالدولار",
    isShifting: true,
  },
  {
    className: "border-l-[.3rem] w-[3.8rem] md:w-[4.3rem] border-gray bg-card-3 text-gray",
    icon: <AnalysisIcon3 />,
    value: 92345678,
    title: "فرصة عمل",
  },
  {
    className:
      "border-r-[.3rem] w-[3.8rem] md:w-[4.3rem] border-primary bg-card-1 text-primary",
    icon: <AnalysisIcon4 />,
    value: 987342,
    title: "فرصة عمل",
    isShifting: true,
  },
  {
    className:
      "border-l-[.3rem] w-[3.8rem] md:w-[4.3rem] border-secondary bg-card-2 text-secondary",
    icon: <AnalysisIcon5 />,
    value: 26,
    title: "فرصة عمل",
  },
];
export default memo(function AnalysisSection() {
  return (
    <motion.section
      variants={analysis}
      animate="animate"
      initial="initial"
      className="container px-0 my-9 relative bg-background rounded-2xl overflow-hidden shadow-lg z-[1] -top-[calc((var(--space-between-sections)/2)+var(--analysis-cross-height))]"
    >
      <div className="w-[30vw] opacity-80 aspect-square bg-card absolute rounded-full left-0 bottom-0 -translate-x-1/2"></div>
      <div className="w-[30vw] opacity-80 aspect-square bg-card absolute rounded-full right-0 bottom-0 translate-x-1/2 translate-y-1/2"></div>
      <div className="w-full pt-5 pb-12 px-12">
        <div className="relative w-fit mx-auto py-3 mb-6">
          <div className="absolute top-0 right-0 w-1/3 h-1 bg-secondary rounded-md"></div>
          <h2 className="text-section-title font-semibold text-primary">
            ارقام الاحصائيات
          </h2>
        </div>
        <div className="w-full flex gap-1 gap-y-6 md:gap-3 flex-wrap md:flex-row lg:gap-5 justify-around md:pb-12">
          {analysisCards.map((card, index) => (
            <AnalysisCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.section>
  );
});

const AnalysisCard = memo(
  ({
    className,
    icon,
    value,
    title,
    isShifting,
  }: {
    className: string;
    icon: React.ReactNode;
    value: string | number;
    title: string;
    isShifting?: boolean;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "all" });
    return (
      <div
        className={`text-card-foreground basis-[calc(50%-1rem)] md:basis-auto text-center relative flex flex-col justify-center items-center ${
          isShifting ? "md:translate-y-1/2" : ""
        }`}
      >
        <AnalysisIcon className={className} icon={icon} />
        <p className="flex gap-2 text-subtitle font-bold justify-center items-center">
          <NumberFlow value={isInView ? +value : 0} ref={ref} />
          <span>+</span>
        </p>
        <p className="text-p">{title}</p>
      </div>
    );
  }
);

AnalysisCard.displayName = "AnalysisCard";
