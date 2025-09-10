"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        // base button
        "relative inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer border-0 h-10 px-5 text-sm",

        // background layer (dark/light mode)
        "bg-background dark:bg-foreground",

        // rainbow animated foreground
        "bg-gradient-to-r from-[hsl(var(--color-1))] via-[hsl(var(--color-3))] to-[hsl(var(--color-5))] bg-[length:200%] animate-rainbow text-transparent bg-clip-text",

        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
