import { memo, useRef } from "react";
import AnalysisIcon2 from "../icons/analysis-2";
import AnalysisIcon1 from "../icons/analysis-1";
import AnalysisIcon3 from "../icons/analysis-3";
import AnalysisIcon4 from "../icons/analysis-4";
import AnalysisIcon5 from "../icons/analysis-5";
import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { analysis } from "../hero-section/animation";
const analysisCards = [
  {
    firstColor: "bg-primary",
    secondColor: "bg-card-1",
    position: "right-[8%]",
    margin: "mr-[-10%]",
    textColor: "text-primary",
    icon: <AnalysisIcon1 />,
    value: 987656,
    title: "فرصة عمل",
  },
  {
    firstColor: "bg-secondary",
    secondColor: "bg-card-2",
    position: "left-[8%]",
    margin: "ml-[-10%]",
    textColor: "text-secondary",
    icon: <AnalysisIcon2 />,
    value: 123459,
    title: "قيمة المساعدات بالدولار",
    isShifting: true,
  },
  {
    firstColor: "bg-gray",
    secondColor: "bg-card-3",
    position: "right-[8%]",
    margin: "mr-[-10%]",
    textColor: "text-gray",
    icon: <AnalysisIcon3 />,
    value: 92345678,
    title: "فرصة عمل",
  },
  {
    firstColor: "bg-primary",
    secondColor: "bg-card-1",
    position: "left-[8%]",
    margin: "ml-[-10%]",
    textColor: "text-primary",
    icon: <AnalysisIcon4 />,
    value: 987342,
    title: "فرصة عمل",
    isShifting: true,
  },
  {
    firstColor: "bg-secondary",
    secondColor: "bg-card-2",
    position: "right-[8%]",
    margin: "mr-[-10%]",
    textColor: "text-secondary",
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
          <h3 className="text-3xl font-bold text-primary ">ارقام الاحصائيات</h3>
        </div>
        <div className="w-full flex gap-4 justify-around pb-12">
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
    firstColor,
    secondColor,
    position,
    icon,
    textColor,
    value,
    title,
    isShifting,
    margin,
  }: {
    firstColor: string;
    secondColor: string;
    position: string;
    icon: React.ReactNode;
    textColor: string;
    value: string | number;
    title: string;
    isShifting?: boolean;
    margin?: string;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "all" });
    return (
      <div
        className={`text-card-foreground text-center relative flex flex-col justify-center items-center ${
          isShifting ? "md:translate-y-1/2" : ""
        }`}
      >
        <AnalysisIcon
          firstColor={firstColor}
          secondColor={secondColor}
          position={position}
          textColor={textColor}
          icon={icon}
          margin={margin}
        />
        <p className="flex gap-2 text-2xl font-semibold justify-center items-center">
          <NumberFlow value={isInView ? +value : 0} ref={ref} />
          <span>+</span>
        </p>
        <p>{title}</p>
      </div>
    );
  }
);

AnalysisCard.displayName = "AnalysisCard";

const AnalysisIcon = memo(
  ({
    firstColor,
    secondColor,
    position,
    icon,
    textColor,
    margin,
  }: {
    firstColor: string;
    secondColor: string;
    position: string;
    icon: React.ReactNode;
    textColor: string;
    margin?: string;
  }) => {
    return (
      <div className={`relative flex items-center justify-center w-16 h-16 mb-4 ${margin}`}>
        <div
          className={`absolute w-full h-full ${firstColor} rounded-full ${position} shadow-xl`}
        />
        <div
          className={`absolute w-full h-full rounded-full ${secondColor}`}
        />
        <div
          className={`absolute w-2/3 h-2/3 ${textColor} bg-white rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    );
  }
);

AnalysisIcon.displayName = "AnalysisIcon";
