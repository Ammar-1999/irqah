import Link from "next/link";
import React, { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ActiveLink = forwardRef(
  (
    {
      children,
      href,
      className,
      ...props
    }: { children: React.ReactNode; href: string; className?: string },
    ref
  ) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
      <Link
        href={href}
        className={cn(
          isActive ? "text-secondary font-semibold" : "text-primary",
          className
        )}
        {...props}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }
);

ActiveLink.displayName = "ActiveLink";

export default ActiveLink;
