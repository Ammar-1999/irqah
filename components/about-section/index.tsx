import { memo } from "react";
import MoreArrow from "../icons/moreArrow";
import { Link } from "../ui/link";
import { motion } from "framer-motion";
import { BlurFade } from "../ui/blur-fade";
import { fadeIn, spring } from "../hero-section/animation";
import { LineAnimation } from "../ui/line-animation";
const viewport = { once: true, amount: 0.5 };
const About = memo(() => {
  return (
    <section className="flex gap-8 items-center container text-card-foreground mb-between-sections">
      <div className="flex-1">
        <div className="relative w-fit py-3 mb-1">
          <LineAnimation />
          <BlurFade inViewMargin="-50px" inView>
            <h3 className="text-3xl font-bold text-secondary ">عن الجمعية</h3>
          </BlurFade>
        </div>
        <motion.p
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="text-lg"
        >
          جمعية عرقة الخيرية باب من الخير والعطاء والبذل والإحسان لكل محسن
          ومتبرع وباذل ودال على الخير ،والموفق من وفقه الله لفعل الخير وبذله
          والدلالة عليه قال صلى الله عليه وسلم (الدال على الخير كفاعله).
        </motion.p>
        <motion.p
          custom={0.3}
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="mt-3 text-lg"
        >
          تأسست الجمعية بتاريخ 1430/05/10هـ و سجلت بوزارة الموارد البشرية
          والتنمية الاجتماعية برقم (489)
        </motion.p>
        <motion.div
          custom={0.5}
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="mr-auto w-fit mt-8"
        >
          <Link variant="moreSecondary" href="/#" className="flex text-xl font-bold">
            <span>المزيد</span>
            <MoreArrow />
          </Link>
        </motion.div>
      </div>
      <div className="flex-[.9] relative aspect-square">
        <div className="absolute top-8 right-12 w-[90%] aspect-square bg-secondary/70 rounded-2xl" />
        <div className="absolute top-0 right-4 w-[90%] aspect-square bg-background rounded-2xl" />
        <motion.img
          initial={{ y: "2rem", x: "-3rem" }}
          whileInView={{ y: 0, x: 0 }}
          viewport={viewport}
          transition={spring}
          src="/images/about.webp"
          alt="  "
          className="w-[90%] relative aspect-square object-cover rounded-2xl"
        />
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
