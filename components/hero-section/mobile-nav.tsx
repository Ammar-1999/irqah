import * as React from "react";
import {
  ActiveLink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationItems } from "./navigationItems";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/mult-accordion";
import { ChevronDown } from "lucide-react";
export const Menu = () => {
  return (
    <NavigationMenu
      viewportContainerClassName="left-auto right-0"
      className="flex justify-start items-start tab:hidden"
      viewportClassName="h-fit"
    >
      <NavigationMenuItem>
        <NavigationMenuTrigger
          showChevron={false}
          className="px-3 py-3 w-max items-center font-bold justify-center rounded-lg bg-card text-p transition-all duration-300 hover:bg-accent focus:bg-accent active:scale-95 hover:scale-95 focus:scale-95"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 16.0188L2 16.0188M18 10.0094L7.5 10.0094M18 4L2 4"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="py-4 px-4 overflow-y-auto max-h-[90vh] left-auto right-0 min-w-[60vw] max-w-[80vw] top-3 flex flex-col gap-3 items-center justify-center">
          <Accordion className="flex w-full flex-col gap-3">
            {navigationItems.map((item, index) =>
              item.items ? (
                <AccordionItem key={index} value={item.title}>
                  <AccordionTrigger
                    ariaLabel={item.title}
                    className="header-link"
                    openClassName="text-secondary"
                  >
                    {item.title}
                    <ChevronDown
                      className="relative top-[1px] ltr:ml-1 rtl:mr-1 h-3 w-3 transition duration-300 group-data-[expanded=true]:rotate-180"
                      aria-hidden="true"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 items-center justify-center">
                    {item.items.map((subItem, subIndex) => (
                      <ActiveLink
                        key={subIndex}
                        href={subItem.href}
                        className="header-link text-secondary w-full"
                      >
                        {subItem.title}
                      </ActiveLink>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <ActiveLink
                  key={index}
                  href={item.href}
                  className="header-link w-full"
                >
                  {item.title}
                </ActiveLink>
              )
            )}
          </Accordion>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};
