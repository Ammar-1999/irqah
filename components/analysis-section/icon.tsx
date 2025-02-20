

import { cn } from "@/lib/utils";
import { memo } from "react";


const AnalysisIcon = memo(
  ({
    icon,
    className
  }: {
    icon: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn(`flex items-center justify-center aspect-square mb-4 rounded-full`, className)}>
        <div
          className={`w-2/3 h-2/3 bg-white rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    );
  }
);

AnalysisIcon.displayName = "AnalysisIcon";

export default AnalysisIcon;