import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import { IMAGES } from "./images";

const sliderVariants = {
  incoming: (direction) => ({
    scale: 1.2,
    opacity: 0,
    originY: direction > 0 ? 1 : 0, // 1 = right, 0 = left
    originX: 1, // Always bottom
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    scale: 1.2,
    opacity: 0.2,
    originY: direction > 0 ? 1 : 0, // 1 = right, 0 = left
    originX: 1, // Always bottom
  }),
};

const sliderTransition = {
  duration: 1.2,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Hero = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = useCallback(
    (swipeDirection) => {
      setImageCount([imageCount + swipeDirection, swipeDirection]);
    },
    [imageCount]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeToImage]);
  // const skipToImage = useCallback((imageId) => {
  //   let changeDirection;
  //   if (imageId > activeImageIndex) {
  //     changeDirection = 1;
  //   } else if (imageId < activeImageIndex) {
  //     changeDirection = -1;
  //   }
  //   setImageCount([imageId, changeDirection]);
  // }, [activeImageIndex]);

  return (
    <>
      <div className="overflow-hidden relative h-screen w-screen">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={imageCount}
            src={IMAGES[activeImageIndex].imageSrc}
            custom={direction}
            variants={sliderVariants}
            aria-label="Hero Image"
            alt="Hero Image"
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            className="object-cover absolute top-0 left-0 w-full h-full object-center overflow-hidden will-change-[transform,opacity] rep"
          />
        </AnimatePresence>
      </div>

      {/* <div className="buttons">
        <button onClick={() => swipeToImage(-1)}>PREV</button>
        <button onClick={() => swipeToImage(1)}>NEXT</button>
      </div> */}
      {/* <div className="thumbnails">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img src={image.imageSrc} alt="Musician" />
            <div
              className={`active-indicator ${
                image.id === activeImageIndex ? "active" : null
              }`}
            />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Hero;
