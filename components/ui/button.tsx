import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
        danger:
          "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
        dangerOutline:
          "border border-red-600 text-red-600 hover:bg-red-100 active:bg-red-200 focus-visible:outline-red-600",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 active:bg-secondary-active",
        ghost: "btn btn-ghost min-h-0",
        none: "",
        dashed: "min-h-0 border border-dashed btn btn-ghost",
        green: "btn border-none bg-status-delivered/10 text-status-delivered py-1.5 px-3 hover:bg-status-delivered/20 gap-2",
        morePrimary: "text-primary rounded-full hover:bg-primary active:bg-primary hover:text-primary-foreground active:text-primary-foreground",
        moreSecondary: "text-secondary border border-secondary rounded-full hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      disabled: {
        true: "pointer-events-none opacity-70",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, disabled }))}
        ref={ref}
        type={props.type || "button"}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
