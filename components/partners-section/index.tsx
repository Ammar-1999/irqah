

import { memo } from "react";
import { LineAnimation } from "../ui/line-animation";
import { BlurFade } from "../ui/blur-fade";
import ScrollImages from "./scroll-images";

const PartnersSection = memo(() => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-fit mx-auto">
        <LineAnimation />
        <BlurFade inViewMargin="-50px" inView>
          <h3 className="text-section-title font-semibold text-primary pt-3 pb-2">
            الشركاء النجاح
          </h3>
        </BlurFade>
      </div>
      <ScrollImages />
    </section>
  );
});

PartnersSection.displayName = "PartnersSection";

export default PartnersSection;
