"use client";

import { cn } from "@lib/utils";
import { MotionProps, Variants, motion as m } from "framer-motion";

type ButtonProps = {
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const Button = ({ className, title, ...props }: ButtonProps) => {
  return (
    <m.button
      aria-label={title}
      className={cn(
        "relative min-w-max overflow-hidden rounded-[5px] border-2 border-cyan px-5 py-3 text-base text-white duration-100 after:absolute after:right-full after:top-0 after:-z-[1] after:h-full after:w-full after:bg-cyan after:duration-200 hover:shadow-hovered-glow hover:after:right-0 md:px-5 md:py-3 md:text-lg",
        className
      )}
      {...props}
    >
      {title}
    </m.button>
  );
};

export default Button;
