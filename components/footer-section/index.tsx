import { memo } from "react";
import {
  CellPhoneIcon,
  EmailIcon,
  InstagramIcon,
  PhoneIcon,
  SnapchatIcon,
  TimeIcon,
  TwitterIcon,
} from "./icons";
import { Button } from "../ui/button";
import { SharePayment } from "../ui/share-payment";

const FooterSection = memo(() => {
  return (
    <footer className="relative bg-[#071207] pb-8">
      <img
        src="/images/footer-bg.webp"
        alt="footer-bg"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative container pb-4 pt-10 h-full text-p">
        <div className="grid grid-cols-1 gap-y-9 sm:gap-y-2 sm:grid-cols-2 tab:grid-cols-12 gap-2 lg:gap-5">
          <div className="flex h-full tab:col-span-2">
            <img
              src="/images/footer-logo.png"
              alt="footer-logo"
              height={32}
              width={32}
              className="w-24 h-auto sm:w-36 object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-2 flex-1 tab:col-span-5">
            <p className="text-white text-p font-bold mb-3 mr-[24px]">
              معلومات الإتصال
            </p>
            <div className="flex justify-start items-center gap-3 text-secondary">
              <EmailIcon width="1rem" height="1rem" />
              <span className="text-white">info@irqahorg.sa</span>
            </div>
            <div className="flex justify-start items-center gap-3 text-secondary">
              <CellPhoneIcon width="1rem" height="1rem" />
              <span className="text-white">0114555601 - 0112466073</span>
            </div>
            <div className="flex justify-start items-center gap-3 text-secondary">
              <PhoneIcon width="1rem" height="1rem" />
              <span className="text-white">
                0531193510 - 0552077724 - 0504174449
              </span>
            </div>
            <div className="flex justify-start items-center gap-3 text-secondary">
              <TimeIcon width="1rem" height="1rem" />
              <span className="text-white">
                {" "}
                من 8:00 حتى 12:00 من 3:30 حتى 8:30
              </span>
            </div>
          </div>
          <div className="space-y-2 tab:col-span-2 mr-[24px]">
            <p className="text-white text-p font-bold">عن الجمعية</p>
            <p className="text-white text-p font-bold">البرامج والمشاريع</p>
            <p className="text-white text-p font-bold">المركز الاعلامى</p>
            <p className="text-white text-p">(الفيديو والصوروالاخبار)</p>
          </div>
          <div className="flex flex-col gap-8 justify-between tab:col-span-3 mr-[24px]">
            <div className="flex gap-10 tab:gap-5 lg:gap-8 flex-1 items-center">
              <a
                href="mailto:info@irqahorg.sa"
                aria-label="البريد الالكتروني"
                className="text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all duration-300"
              >
                <EmailIcon width="24px" height="24px" />
              </a>
              <a
                href="https://twitter.com/IRQAH_ORG"
                aria-label="تويتر"
                className="text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all duration-300"
              >
                <TwitterIcon width="24px" height="24px" />
              </a>
              <a
                href="https://www.instagram.com/irqah_org/"
                aria-label="انستقرام"
                className="text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all duration-300"
              >
                <InstagramIcon width="24px" height="24px" />
              </a>
              <a
                href="https://www.snapchat.com/add/irqah_org"
                aria-label="سناب شات"
                className="text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all duration-300"
              >
                <SnapchatIcon width="24px" height="24px" />
              </a>
            </div>
            <Button
              aria-label="الموقع"
              variant="none"
              className="font-semibold text-CTA w-fit mr-auto rounded-full border border-white px-8 h-12 hover:bg-secondary/60 active:bg-secondary/60 focus:bg-secondary/60 transition-all duration-300"
            >
              <span>الموقع</span>
              <SharePayment width="1.2rem" height="1.2rem" />
            </Button>
          </div>
        </div>
        <div className="w-full h-1 rounded-lg my-5 tab:my-3 bg-gradient-to-r from-transparent to-white relative" />
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
          <p className="text-secondary text-p text-center">
            جميع الحقوق محفوظة الملكية والفكرية محفوظة لجمعية عرقة ©2023
          </p>
          <img
            height={32}
            width={32}
            src="/images/vision.png"
            alt="رؤية 2030"
            className="w-14 h-auto object-contain mr-auto"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
