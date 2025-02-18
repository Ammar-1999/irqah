import React, { memo, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import { Header1 } from "../ui/header";
import PhoneIcon from "../icons/phone";
import MailIcon from "../icons/email";
import { Arrow } from "../icons/arrow";
import { Button } from "../ui/button";
import { DonateIcon } from "../icons/donate";
import { WhatsappIcon } from "../icons/whatsapp";
import {
  dotsTransition,
  heroActionVariants,
  heroContactVariants,
  heroContentVariants,
  heroImageControllerVariants,
  overlayTransition,
  overlayVariants,
  sliderTransition,
  sliderVariants,
} from "./animation";

const Hero = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, 3, imageCount);

  const swipeToImage = useCallback(
    (swipeDirection) => {
      setImageCount([imageCount + swipeDirection, swipeDirection]);
    },
    [imageCount]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [swipeToImage]);
  const prev = useCallback(() => {
    swipeToImage(-1);
  }, [swipeToImage]);
  const next = useCallback(() => {
    swipeToImage(1);
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
      <section className="overflow-hidden h-screen w-full relative mb-[calc(var(--space-between-sections)/2)]">
        <motion.div
          className="hero-gradient absolute inset-0 w-full h-full z-[1]"
          variants={overlayVariants}
          animate="animate"
          initial="initial"
          transition={overlayTransition}
        />
        <div className="container h-screen px-0 pt-3 pb-[calc(var(--analysis-cross-height)+1rem)]">
          <div className="flex flex-col justify-between h-full w-full text-foreground z-[1] relative">
            <HeroContact />
            <HeroContent />
            <motion.div variants={heroImageControllerVariants} initial="initial" animate="animate" className="absolute bottom-0 right-0 h-3/5 flex flex-col justify-between">
              <Dots activeImageIndex={activeImageIndex} />
              <PrevNextButtons prev={prev} next={next} />
            </motion.div>
            <ActionButtons />
          </div>
        </div>

        <Header1 />
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={imageCount}
            src={`/images/hero/${activeImageIndex + 1}.webp`}
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
      </section>

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

const Dot = memo(
  ({
    activeImageIndex,
    index,
  }: {
    activeImageIndex: number;
    index: number;
  }) => {
    return (
      <div className={`hero-dots`}>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-foreground rounded-full"
          animate={{
            width: activeImageIndex === index ? "1.5rem" : "0",
            height: activeImageIndex === index ? "1.5rem" : "0",
          }}
          transition={dotsTransition}
        />
      </div>
    );
  }
);
Dot.displayName = "Dot";

const Dots = memo(({ activeImageIndex }: { activeImageIndex: number }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Dot activeImageIndex={activeImageIndex} index={0} />
      <Dot activeImageIndex={activeImageIndex} index={1} />
      <Dot activeImageIndex={activeImageIndex} index={2} />
    </div>
  );
});
Dots.displayName = "Dots";

const PrevNextButtons = memo(
  ({ prev, next }: { prev: () => void; next: () => void }) => {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <Button
          variant="none"
          onClick={prev}
          className="w-12 h-12 cursor-pointer bg-black/40 hover:bg-black/60 active:bg-black/60 rounded-full flex justify-center items-center"
        >
          <Arrow direction="right" />
        </Button>
        <Button
          variant="none"
          onClick={next}
          className="w-12 h-12 cursor-pointer bg-black/40 hover:bg-black/60 active:bg-black/60 rounded-full flex justify-center items-center"
        >
          <Arrow direction="left" />
        </Button>
      </div>
    );
  }
);
PrevNextButtons.displayName = "PrevNextButtons";
const HeroContent = memo(() => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full mt-[calc(var(--analysis-cross-height)+1rem)]">
      <motion.div
        custom={0.2}
        className="relative py-1 px-2"
        variants={heroContentVariants}
        animate="animate"
        initial="initial"
      >
        <div className="hero-linear-gradient absolute inset-0 rounded-s-lg" />
        <p className="relative z-10 text-xl">نرصد حاجة ..نحفظ كرامة الانسان</p>
      </motion.div>
      <motion.h1
        custom={0.4}
        className="text-6xl font-bold my-4"
        variants={heroContentVariants}
        animate="animate"
        initial="initial"
      >
        جمعية عرقة الخيرية
      </motion.h1>
      <motion.div
        custom={1}
        className="hero-gradient-line-2 w-[30rem] h-1 rounded-xl"
        animate="animate"
        initial="initial"
      />
      <motion.p
        custom={0.6}
        className="text-xl my-4"
        variants={heroContentVariants}
        animate="animate"
        initial="initial"
      >
        من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا
      </motion.p>
    </div>
  );
});
HeroContent.displayName = "HeroContent";

const HeroContact = memo(() => {
  return (
    <motion.div
      className="flex justify-between items-center w-full font-light text-sm"
      variants={heroContactVariants}
      animate="animate"
      initial="initial"
    >
      <div className="flex gap-2 items-center">
        <PhoneIcon />
        <span>0114555601-0112466073</span>
      </div>
      <div className="flex gap-2 items-center">
        <MailIcon />
        <span>info@irqahorg.sa</span>
      </div>
    </motion.div>
  );
});
HeroContact.displayName = "HeroContact";

const ActionButtons = memo(() => {
  return (
    <motion.div variants={heroActionVariants} initial="initial" animate="animate" className="absolute bottom-0 left-0 flex flex-col justify-between z-10 items-end gap-3">
      <Button
        aria-label="تبرع الان"
        variant="secondary"
        className="font-semibold text-lg rounded-1xl px-4 py-8 bg-secondary/60"
      >
        <span>تبرع الان</span>
        <DonateIcon />
      </Button>
      <Button variant="secondary" className="h-11 w-11 rounded-full">
        <WhatsappIcon />
      </Button>
    </motion.div>
  );
});
ActionButtons.displayName = "ActionButtons";
