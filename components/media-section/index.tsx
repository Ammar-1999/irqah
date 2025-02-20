import { motion, useInView } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Link } from "../ui/link";
import MoreArrow from "../icons/moreArrow";
import { spring } from "../hero-section/animation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LineAnimation } from "../ui/line-animation";
import { BlurFade } from "../ui/blur-fade";
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
    <CarouselItem className="basis-[90%] my-2 md:basis-1/2 lg:basis-1/3 pl-3 md:pl-4 lg:pl-6">
      <motion.div
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ ...spring, delay: index * 0.2 }}
        className="relative overflow-hidden bg-card rounded-1xl shadow-sm hover:shadow-md focus:shadow-md transition-shadow duration-300"
      >
        <img loading="lazy" src={imageSrc} alt={title} className="object-cover h-72 w-full" />
        <div className="pt-3 pb-4 px-5">
          <div className="absolute top-4 left-6 w-24 h-24 bg-black/80 blur-2xl" />
          <Link
            variant="cardMore"
            href="/#"
            className="flex absolute top-4 left-4"
          >
            <p className="text-p font-semibold">المزيد</p>
            <MoreArrow />
          </Link>
          <div className="text-secondary text-p">{date}</div>
          <div className="text-card-foreground font-semibold text-subtitle my-2">
            {title}
          </div>
          <div className="text-lightGray text-p">{description}</div>
        </div>
      </motion.div>
    </CarouselItem>
  );
}

export default function MediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.5, once: true });
  const [onStop, setOnStop] = useState(true);
  const onStopHandler = useCallback(() => {
    setOnStop(false);
  }, []);
  const onStartHandler = useCallback(() => {
    setOnStop(true);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="container text-card-foreground mb-between-sections"
    >
      <div className="relative w-fit py-3 mb-1">
        <LineAnimation />
        <BlurFade inViewMargin="-50px" inView>
          <h3 className="text-section-title font-semibold text-primary ">المركز الاعلامى</h3>
        </BlurFade>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-p text-card-foreground"
        >
          اخر اخبار وفاعليات الجمعية
        </motion.p>
      </div>
      <Carousel
        onMouseEnter={onStopHandler}
        onMouseLeave={onStartHandler}
        onTouchStart={onStopHandler}
        onFocus={onStopHandler}
        onBlur={onStartHandler}
        onTouchEnd={onStartHandler}
        plugins={[
          Autoplay({
            delay: 2000,
            active: onStop && inView,
          }),
        ]}
        opts={{
          align: "start",
          direction: "rtl",
        }}
      >
        <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-6 cursor-grab active:cursor-grabbing">
          {content.map((item, index) => (
            <DemoCard key={index} index={index} {...item} inView={inView} />
          ))}
        </CarouselContent>
        <div className="flex gap-4 justify-around items-center w-fit mx-auto mt-6">
          <CarouselPrevious className="border border-notActive text-notActive rounded-full w-10 h-10 p-[.6rem] disabled:opacity-50 disabled:cursor-not-allowed" />
          <CarouselNext className="border rotate-180 border-notActive text-notActive rounded-full w-10 h-10 p-[.6rem] disabled:opacity-50 disabled:cursor-not-allowed" />
        </div>
      </Carousel>
      {/* <div className="flex gap-4 justify-around items-center w-fit mx-auto">
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
      </div> */}
    </section>
  );
}
