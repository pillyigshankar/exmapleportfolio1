import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border border-[#B08968]/30 bg-[#E8DFD1]/60 px-3 py-1 text-xs font-medium text-[#5E4A38]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
