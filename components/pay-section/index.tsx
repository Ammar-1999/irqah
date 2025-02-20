import { motion, useInView } from "framer-motion";
import { ease } from "../hero-section/animation";
import { memo, useRef } from "react";
import { Bank } from "../icons/bank";
import { Mada } from "../icons/mada";
import { ApplePay } from "../icons/apple-pay";
import { Mastercard } from "../icons/mastercard";
import { Visa } from "../icons/visa";
import { LineAnimation } from "../ui/line-animation";
import AnalysisIcon from "../analysis-section/icon";
import MoreArrow from "../icons/moreArrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordion,
} from "../ui/mult-accordion";
import { SharePayment } from "../ui/share-payment";
import { InKind } from "../ui/InKind";
import { Button } from "../ui/button";
import { DonateIcon } from "../icons/donate";

const paymentTypesVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease, duration: 0.3 },
  },
};

const paymentIconVariants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

export default memo(function PaySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="bg-primary w-full min-h-fit h-[50rem] md:h-[45rem] mb-between-sections relative overflow-hidden bg-[url('/images/pay-bg.webp')] bg-cover bg-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
      <div className="container relative flex flex-col md:flex-row py-5 h-full">
        <div className="flex flex-col md:flex-[.8] md:h-full justify-between gap-10 mb-4">
          <div className="space-y-4 relative z-[1]">
            <motion.h3
              variants={paymentTypesVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              className="text-foreground text-p font-semibold"
            >
              وسائل الدفع
            </motion.h3>
            <div className="flex gap-7">
              <motion.div
                variants={paymentIconVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={0}
              >
                <Bank />
              </motion.div>
              <motion.div
                variants={paymentIconVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={1}
              >
                <Mada />
              </motion.div>
              <motion.div
                variants={paymentIconVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={2}
              >
                <ApplePay />
              </motion.div>
              <motion.div
                variants={paymentIconVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={3}
              >
                <Mastercard />
              </motion.div>
              <motion.div
                variants={paymentIconVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                custom={4}
              >
                <Visa />
              </motion.div>
            </div>
          </div>
          <div className="relative w-fit md:m-auto">
            <div className="absolute top-0 right-0 w-[100%] h-[100%] bg-black blur-[50px] md:blur-[80px]" />
            <div className="z-[1] relative">
              <LineAnimation />
              <h3 className="text-section-title font-bold">ساهم معنا</h3>
              <p className="text-p">الطرق التبرع لجمعية عرقةالخيرية.</p>
            </div>
          </div>
        </div>
        <div className="flex border h-fit border-gray-300/50 md:flex-1 flex-col justify-center py-6 px-6 gap-2 bg-[rgba(39,91,45,0.1)] backdrop-blur-sm rounded-2xl mt-4 lg:mt-6">
          <PaymentTypes />
        </div>
      </div>
    </section>
  );
});

const BankIcon = memo(() => {
  return (
    <svg
      width="65%"
      height="65%"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59397 10.3806H33.4042C34.3008 10.3806 34.625 9.1974 33.8536 8.74058L18.9487 0.652756C18.6714 0.488795 18.3267 0.488795 18.0498 0.652756L3.14459 8.74022C2.37321 9.1974 2.69739 10.3806 3.59397 10.3806Z"
        fill="currentColor"
      />
      <path
        d="M6.45865 27.5231C6.11471 27.5231 5.83594 27.8018 5.83594 28.1458C5.83594 28.4901 6.11465 28.7689 6.45865 28.7689H10.5223C10.8662 28.7689 11.145 28.4901 11.145 28.1458C11.145 27.8018 10.8663 27.5231 10.5223 27.5231H9.91827V13.7692H10.5223C10.8662 13.7692 11.145 13.4905 11.145 13.1465C11.145 12.8025 10.8663 12.5234 10.5223 12.5234H6.45865C6.11471 12.5234 5.83594 12.8026 5.83594 13.1465C5.83594 13.4905 6.11465 13.7692 6.45865 13.7692H7.06268V27.5231H6.45865Z"
        fill="currentColor"
      />
      <path
        d="M26.4762 27.5231C26.1323 27.5231 25.8535 27.8018 25.8535 28.1458C25.8535 28.4901 26.1322 28.7689 26.4762 28.7689H30.5399C30.8842 28.7689 31.163 28.4901 31.163 28.1458C31.163 27.8018 30.8842 27.5231 30.5399 27.5231H29.9362V13.7692H30.5399C30.8842 13.7692 31.163 13.4905 31.163 13.1465C31.163 12.8025 30.8842 12.5234 30.5399 12.5234H26.4762C26.1323 12.5234 25.8535 12.8026 25.8535 13.1465C25.8535 13.4905 26.1322 13.7692 26.4762 13.7692H27.0803V27.5231H26.4762Z"
        fill="currentColor"
      />
      <path
        d="M33.9595 30.6729H3.04102V32.9486H33.9595V30.6729Z"
        fill="currentColor"
      />
      <path d="M37 34.1948H0V36.4702H37V34.1948Z" fill="currentColor" />
      <path
        d="M17.6674 14.7329V15.7875C17.1148 15.8493 16.6181 15.9585 16.1776 16.1154C15.7372 16.2726 15.363 16.4791 15.056 16.7351C14.7485 16.9915 14.5134 17.2952 14.3495 17.6465C14.1859 17.9979 14.1035 18.3993 14.1035 18.8498C14.1035 19.4028 14.2097 19.8534 14.4214 20.2018C14.6327 20.5502 14.9081 20.8301 15.246 21.0417C15.584 21.2534 15.9645 21.4121 16.3878 21.5179C16.8112 21.6234 17.2378 21.7072 17.6678 21.7687V24.0113C17.3198 24.0046 16.9989 23.9859 16.7053 23.955C16.4117 23.9244 16.1318 23.8835 15.8654 23.8324C15.5993 23.7809 15.3399 23.7199 15.0873 23.6479C14.8343 23.5764 14.5753 23.4925 14.3088 23.3971V25.4046C14.6979 25.582 15.1875 25.7202 15.7781 25.8189C16.3684 25.9181 16.9985 25.9777 17.6674 25.9982V27.0017H19.2958V25.9472C20.4227 25.8238 21.2909 25.5134 21.9021 25.0152C22.5132 24.5166 22.8192 23.8306 22.8192 22.9564C22.8192 22.4101 22.7148 21.963 22.5066 21.6149C22.2979 21.2669 22.0285 20.9848 21.6972 20.7698C21.3659 20.5548 20.9907 20.3904 20.571 20.2783C20.1511 20.1657 19.7262 20.0752 19.2958 20.007V17.7331C20.204 17.7745 21.1836 17.9656 22.2352 18.3066V16.2794C21.8052 16.1292 21.3323 16.0111 20.8166 15.9258C20.3013 15.8405 19.7944 15.7846 19.2958 15.757V14.733L17.6674 14.7329ZM17.6674 19.7509C17.2236 19.669 16.8924 19.5534 16.6744 19.4029C16.4556 19.2531 16.3464 19.0343 16.3464 18.7474C16.3464 18.4948 16.4422 18.2853 16.6334 18.1176C16.8245 17.9507 17.1692 17.8396 17.6674 17.7849V19.7509ZM20.2536 22.3475C20.4623 22.4947 20.5662 22.7112 20.5662 22.9981C20.5662 23.5172 20.1425 23.831 19.2962 23.9398V22.0144C19.7263 22.0896 20.0453 22.2007 20.2536 22.3475Z"
        fill="currentColor"
      />
    </svg>
  );
});

BankIcon.displayName = "BankIcon";

const PaymentTypes = memo(() => {
  return (
    <Accordion
      className="flex w-full flex-col gap-3"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: { opacity: 1, scale: 1 },
        collapsed: { opacity: 0, scale: 0.7 },
      }}
      defaultExpanded="banking-accounts"
      aria-label="وسائل الدفع"
    >
      <BankingAccounts />
      <FastDonation />
      <InKindDonations />
    </Accordion>
  );
});
PaymentTypes.displayName = "PaymentTypes";

const LinerGradient = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  const { expandedItem } = useAccordion();
  const isExpanded = expandedItem === name;
  return (
    <motion.div
      className={`bg-gradient-to-r rounded-xl -z-[1] absolute top-0 left-0 w-full h-full ${className}`}
      animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    />
  );
};
const BankingAccounts = memo(() => {
  return (
    <AccordionItem
      value="banking-accounts"
      className={`overflow-hidden bg-card px-6 transition-colors duration-300 rounded-1xl border-b-[6px] border-secondary`}
      classNameOnClose="hover:bg-hoverPaymentCard"
    >
      <AccordionTrigger
        ariaLabel="الحسابات البنكية"
        className="w-full relative px-3 py-1 tab:py-2 my-2 tab:my-4 z-[10] h-14 md:h-16 tab:h-20 flex items-center justify-between rounded-1xl"
      >
        <LinerGradient
          name="banking-accounts"
          className="from-[#AB8A0100]/0 to-[#ECE7CD]/80"
        />
        <h3 className="text-subtitle font-medium md:font-semibold text-secondary flex-1 text-start">
          الحسابات البنكية
        </h3>
        <AnalysisIcon
          className="border-l-[.3rem] w-[3.3rem] aspect-square border-secondary bg-card-2 text-secondary mb-0"
          icon={<BankIcon />}
        />
      </AccordionTrigger>
      <AccordionContent
        value="banking-accounts"
        className="flex flex-col text-black justify-center items-center"
      >
        <div className="flex flex-col text-black justify-center items-center pt-4 pb-6">
          <div className="flex items-center justify-center gap-3">
            <img
              loading="lazy"
              src="/images/alrajhi.png"
              alt="مصرف الراجحي"
              height={32}
              width={32}
              className="h-8 w-auto"
            />
            <p className="font-bold text-p mt-1">389608010000256</p>
          </div>
          <p className="font-bold text-p">
            <span className="text-secondary">IBAN:</span>{" "}
            SA8380000389608010000256
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

BankingAccounts.displayName = "BankingAccounts";

const FastDonation = memo(() => {
  return (
    <AccordionItem
      value="fast-donation"
      className={`overflow-hidden bg-card px-6 transition-colors duration-300 rounded-1xl border-b-[6px] border-primary`}
      classNameOnClose="hover:bg-hoverPaymentCard"
    >
      <AccordionTrigger
        ariaLabel="للتبرع السريع"
        className="w-full relative px-3 py-1 tab:py-2 my-2 tab:my-4 z-[10] h-14 md:h-16 tab:h-20 flex items-center justify-between rounded-1xl"
      >
        <LinerGradient
          name="fast-donation"
          className="from-[#275B2D]/0 to-[#275B2D]/10"
        />
        <h3 className="text-subtitle font-medium md:font-semibold text-primary flex-1 text-start">
          للتبرع السريع
        </h3>
        <AnalysisIcon
          className="border-l-[.3rem] w-[3.3rem] aspect-square border-primary bg-card-1 text-primary mb-0"
          icon={<SharePayment />}
        />
      </AccordionTrigger>
      <AccordionContent value="fast-donation">
        <div className="text-card-foreground py-4 space-y-6">
          <p className="font-medium md:font-bold text-p">
            عند الضغط تبرع الان تستطيع الانتقال للتبع مباشرتا
          </p>
          <Button
            aria-label="تبرع الان"
            className="flex items-center gap-2 rounded-full w-fit h-12 tab:h-14 px-7 mr-auto opacity-70 hover:opacity-100 active:opacity-100 focus:opacity-100"
          >
            <span className="text-CTA font-medium md:font-semibold">
              تبرع الان
            </span>
            <DonateIcon />
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

FastDonation.displayName = "FastDonation";
const InKindDonations = memo(() => {
  return (
    <AccordionItem
      value="in-kind-donations"
      className={`overflow-hidden bg-card px-6 transition-colors duration-300 rounded-1xl border-b-[6px] border-gray`}
      classNameOnClose="hover:bg-hoverPaymentCard"
    >
      <AccordionTrigger
        ariaLabel="للتبرعات العينية"
        className="w-full relative px-3 py-1 tab:py-2 my-2 tab:my-4 z-[10] h-14 md:h-16 tab:h-20 flex items-center justify-between rounded-1xl"
      >
        <LinerGradient
          name="in-kind-donations"
          className="from-transparent to-[#F3F3F3]"
        />
        <h3 className="text-subtitle font-medium md:font-semibold text-gray flex-1 text-start">
          للتبرعات العينية
        </h3>
        <AnalysisIcon
          className="border-l-[.3rem] w-[3.3rem] aspect-square border-gray bg-card-3 text-gray mb-0"
          icon={<InKind />}
        />
      </AccordionTrigger>
      <AccordionContent value="in-kind-donations">
        <div className="flex justify-around gap-4 py-4 font-semibold text-p text-gray">
          <div className="space-y-7 text-p">
            <h5 className="font-medium md:font-bold text-card-foreground">
              بيانات مركز التوزيع الخيرى:
            </h5>
            <a href="/#" target="_blank" className="flex gap-1 items-center">
              <p>الموقع الجغرافى</p>
              <MoreArrow />
            </a>
            <a href="/#" target="_blank" className="flex gap-1 items-center">
              <p>تواصل بالواتساب</p>
              <MoreArrow />
            </a>
          </div>
          <div className="space-y-7 text-p">
            <h5 className="font-medium md:font-bold text-card-foreground">
              بيانات مراكزاستقبال الملابس المستعملة:
            </h5>
            <a href="/#" target="_blank" className="flex gap-1 items-center">
              <p>الموقع الجغرافى</p>
              <MoreArrow />
            </a>
            <a href="/#" target="_blank" className="flex gap-1 items-center">
              <p>الموقع الجغرافى</p>
              <MoreArrow />
            </a>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

InKindDonations.displayName = "InKindDonations";
