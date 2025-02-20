import Card from "./card";
import { animate, motion, useMotionValue } from "framer-motion";
import { memo, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
const images = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
];
const FAST_DURATION = 40;
const SLOW_DURATION = 75;

const ScrollImages = memo(() => {

  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const startPosition = -width / 2 - 8;
    const finalPosition = 0;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (xTranslation.get() / startPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [startPosition, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <div className="py-8 h-72 relative overflow-hidden">
      <motion.div
        className="absolute left-0 flex md:gap-4 lg:gap-8"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
        onTouchStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onTouchEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={`${item}`} key={idx} />
        ))}
      </motion.div>
    </div>
  );
});

ScrollImages.displayName = "ScrollImages";
export default ScrollImages;
