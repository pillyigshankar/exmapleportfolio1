import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#2B2B2B] text-[#F5EFE6] shadow-[0_8px_24px_rgba(43,43,43,0.25)] hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(43,43,43,0.3)]",
        outline:
          "border border-[#B08968]/40 bg-transparent text-[#2B2B2B] hover:bg-[#E8DFD1]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
