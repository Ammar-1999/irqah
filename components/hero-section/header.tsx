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
import { heroContactVariants } from "./animation";
import { Menu } from "./mobile-nav";
import { navigationItems } from "./navigationItems";

function Header1() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.1], ["3rem", "1.5rem"]);
  return (
    <motion.header
      style={{ top }}
      variants={heroContactVariants}
      initial="initial"
      animate="animate"
      className="container shadow-lg z-40 fixed left-0 right-0 bg-nav rounded-1xl h-header-height min-h-header-height flex flex-row justify-between items-center ltr:flex-row-reverse"
    >
      <Menu />
      <Link
        href="/"
        aria-label="شعار الجمعية"
        className="rtl:rounded-s-3xl ltr:rounded-e-3xl shrink-0"
      >
        <img
          src="/images/header-logo.png"
          alt="logo"
          className="w-16 h-16 object-contain ms-4"
        />
      </Link>
      <div className="flex-1 hidden items-center gap-4 tab:flex flex-row justify-center">
        <NavigationMenu className="flex justify-start items-start">
          <NavigationMenuList className="flex justify-start gap-1 flex-row">
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
                    <NavigationMenuTrigger className="header-link">{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex flex-col h-full justify-end">
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
        className="block h-full text-p font-bold px-6 rounded-none rtl:rounded-e-1xl ltr:rounded-s-1xl"
      >
        تسجيل الافراد
      </Button>
    </motion.header>
  );
}

export { Header1 };
