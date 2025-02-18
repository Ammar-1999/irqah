import { motion } from "framer-motion";

import { LineAnimation } from "../ui/line-animation";

import { BlurFade } from "../ui/blur-fade";

import { useInView } from "framer-motion";

import { useRef } from "react";

import { IconCheck } from "../icons/check";



interface ServiceCardProps {

  title: string;

  description: string;

  delay: number;

  backgroundColor: string;

  borderColor: string;

  iconColor: string;

}



const services = [

  {

    title: "اخبرنا عن محتاج",

    description:

      "من خلال هذه الخدمة تستطيع تخبرنا عن محتاج لتقديم له يد العون.",

    backgroundColor: "bg-card-1",

    borderColor: "border-primary",

    iconColor: "text-primary",

  },

  {

    title: "حجز موعد تبرع",

    description: "من خلال هذه الخدمة تستطيع حجز موعد للتبرع.",

    backgroundColor: "bg-card-2",

    borderColor: "border-secondary",

    iconColor: "text-secondary",

  },

  {

    title: "طلب عضوية",

    description:

      "من خلال هذه الخدمة تستطيع أن تكون عضو فعال في جمعية عرفة الخيرية.",

    backgroundColor: "bg-card-3",

    borderColor: "border-gray",

    iconColor: "text-gray",

  },

  {

    title: "تطوع معنا",

    description:

      "من خلال هذه الخدمة تستطيع أن تكون تطوع معنا وتكون عضو فعال في مجتمعك.",

    backgroundColor: "bg-card-2",

    borderColor: "border-secondary",

    iconColor: "text-secondary",

  },

  {

    title: "تسجيل مستفيد جديد",

    description:

      "من خلال هذه الخدمة تستطيع ان تقوم بتسجيل مستفيد جديد من خدمات الجمعية.",

    backgroundColor: "bg-card-1",

    borderColor: "border-primary",

    iconColor: "text-primary",

  },

];

const ServiceCard = ({

  title,

  description,

  delay,

  backgroundColor,

  borderColor,

  iconColor,

}: ServiceCardProps) => {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });



  return (

    <motion.div

      ref={ref}

      initial={{ opacity: 0, y: 50 }}

      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}

      transition={{ duration: 0.6, delay: delay }}

      className={`${backgroundColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-colors duration-300 h-full hover:bg-card`}

    >

      <div className="flex flex-col items-start text-right gap-4">

        <div

          className={`rounded-full inline-flex p-1 border-[6px] bg-card ${borderColor} ${iconColor}`}

        >

          <IconCheck />

        </div>

        <h3 className="text-2xl font-semibold text-black">{title}</h3>

        <p className="text-gray leading-relaxed">{description}</p>

      </div>

    </motion.div>

  );

};

export default function Service() {

  return (

    <section className="container text-card-foreground mb-between-sections">

      <div className="flex justify-between items-center">

        <div className="relative w-fit py-3 mb-1">

          <LineAnimation />

          <BlurFade inViewMargin="-50px" inView>

            <h3 className="text-3xl font-bold text-secondary ">خدماتنا</h3>

          </BlurFade>

        </div>

        <div className="flex bg-gta">

          <p></p>

        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-auto">

        {services.map((service, index) => (

          <div key={index} className="basis-full md:basis-[45%] lg:basis-[30%] min-w-[280px]">

            <ServiceCard {...service} delay={index * 0.2} />

          </div>

        ))}

      </div>

    </section>

  );

}