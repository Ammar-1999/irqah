import { Button } from "@/components/ui/button";
import {
  ActiveLink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { heroContactVariants } from "../hero-section/animation";

const navigationItems = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "موقع التبرعات",
    href: "/#",
  },
  {
    title: "السياسات",
    href: "/#",
  },
  {
    title: "عن الجمعية",
    items: [
      {
        title: "التعريف بالجمعية",
        href: "/#",
      },
      {
        title: "الرؤية والرسالة",
        href: "/#",
      },
      {
        title: "الاهداف والقيم",
        href: "/#",
      },
      {
        title: "الجمعية العمومية",
        href: "/#",
      },
      {
        title: "كلمة الامين",
        href: "/#",
      },
      {
        title: "الهيكل الاداري",
        href: "/#",
      },
    ],
  },
  {
    title: "المركز الاعلامي",
    items: [
      {
        title: "الاخبار",
        href: "/#",
      },
      {
        title: "الصور",
        href: "/#",
      },
      {
        title: "مكتبة الفيديو",
        href: "/#",
      },
    ],
  },
  {
    title: "التقارير",
    items: [
      {
        title: "مالية",
        href: "/#",
      },
      {
        title: "استبيانات تقيدم اداء",
        href: "/#",
      },
      {
        title: "املاك الجمعية",
        href: "/#",
      },
    ],
  },
  {
    title: "اتصل بنا",
    href: "/#",
  },
];
function Header1() {
  const { scrollYProgress } = useScroll();

  const top = useTransform(scrollYProgress, [0, 0.1], ["2.5rem", "1.5rem"]);
  return (
    <motion.header
      style={{ top }}
      variants={heroContactVariants}
      initial="initial"
      animate="animate"
      className="container shadow-lg px-0 z-40 fixed left-0 right-0 bg-nav rounded-3xl h-header-height min-h-header-height flex gap-4 flex-row items-center ltr:flex-row-reverse"
    >
      <Link
        href="/"
        aria-label="go to home"
        className="rtl:rounded-s-3xl ltr:rounded-e-3xl"
      >
        <img
          src="/images/header-logo.png"
          alt="logo"
          className="w-16 h-16 object-contain mx-4"
        />
      </Link>
      <div className="flex-1 items-center gap-4 lg:flex hidden flex-row justify-center">
        <NavigationMenu className="flex justify-start items-start">
          <NavigationMenuList className="flex justify-start gap-4 flex-row">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href ? (
                  <>
                    <NavigationMenuLink asChild>
                      <ActiveLink href={item.href} className="header-link">
                        {item.title}
                      </ActiveLink>
                    </NavigationMenuLink>
                  </>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex flex-col text-sm h-full justify-end">
                        {item.items?.map((subItem) => (
                          <ActiveLink
                            href={subItem.href}
                            key={subItem.title}
                            className="header-link w-full flex justify-between"
                          >
                            <span>{subItem.title}</span>
                          </ActiveLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Button
        variant="secondary"
        className="block h-full text-lg font-semibold rounded-none rtl:rounded-e-3xl ltr:rounded-s-3xl"
      >
        تسجيل الافراد
      </Button>
      {/* <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
    </motion.header>
  );
}

export { Header1 };
