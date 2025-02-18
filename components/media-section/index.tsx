import { motion, useInView } from "framer-motion";
import { Carousel, SlideHandle } from "nuka-carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "../ui/link";
import MoreArrow from "../icons/moreArrow";
import { spring } from "../hero-section/animation";
import SmillArrow from "../icons/smill-arrow";

const content = [
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
  {
    title: "عنوان الخبر",
    description: "تفاصيل الخبر تفاصيل الخبر تفاصيل الخبر...",
    imageSrc: "/images/hero/1.webp",
    date: "24 جماد الاول 1446ه",
  },
];

function DemoCard({ title, description, imageSrc, date, index, inView }) {
  return (
    <motion.div
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ ...spring, delay: (content.length - 1 - index) * 0.2 }}
      dir="rtl"
      className="max-w-[70vw] relative flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] m-4 last:mr-0 bg-card rounded-1xl overflow-hidden shadow-sm hover:shadow-md focus:shadow-md transition-shadow duration-300"
    >
      <img src={imageSrc} alt={title} className="object-cover h-72 w-full" />
      <div className="pt-3 pb-4 px-5">
        <div className="absolute top-4 left-6 w-24 h-24 bg-black/80 blur-2xl" />
        <Link
          variant="cardMore"
          href="/#"
          className="flex text-xl font-bold absolute top-4 left-4"
        >
          <span>المزيد</span>
          <MoreArrow />
        </Link>
        <div className="text-secondary">{date}</div>
        <div className="text-card-foreground font-bold text-2xl my-2">
          {title}
        </div>
        <div className="text-lightGray text-lg">{description}</div>
      </div>
    </motion.div>
  );
}

export default function MediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.5 });
  const ref = useRef<SlideHandle>(null);
  const [onStop, setOnStop] = useState(false);
  useEffect(() => {
    if (onStop || !inView) return;
    const interval = setInterval(() => {
      ref.current?.goBack();
    }, 2000);
    return () => clearInterval(interval);
  }, [ref, onStop, inView]);
  const onStopHandler = useCallback(() => {
    setOnStop(true);
  }, []);
  const onStartHandler = useCallback(() => {
    setOnStop(false);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="container text-card-foreground mb-between-sections"
      dir="ltr"
      onMouseEnter={onStopHandler}
      onMouseLeave={onStartHandler}
      onTouchStart={onStopHandler}
      onFocus={onStopHandler}
      onBlur={onStartHandler}
      onTouchEnd={onStartHandler}
    >
      <Carousel
        ref={ref}
        wrapMode="wrap"
        initialPage={content.length - 1}
        scrollDistance={"slide"}
        arrows={false}
      >
        {content.map((item, index) => (
          <DemoCard key={index} index={index} {...item} inView={inView} />
        ))}
      </Carousel>
      <div className="flex gap-4 justify-around items-center w-fit mx-auto">
        <button
          onClick={() => {
            ref.current?.goBack();
          }}
          type="button"
          className="border rotate-180 border-notActive text-notActive rounded-full p-2"
        >
          <SmillArrow />
        </button>
        <button
          className="border border-notActive text-notActive rounded-full p-2"
          onClick={() => {
            ref.current?.goForward();
          }}
        >
          <SmillArrow />
        </button>
      </div>
    </section>
  );
}
