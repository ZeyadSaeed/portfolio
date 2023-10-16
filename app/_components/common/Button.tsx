"use client";

import { cn } from "@lib/utils";
import { MotionProps, m } from "framer-motion";
import { ImSpinner2 } from "@react-icons/all-files/im/ImSpinner2";

type ButtonProps = {
  title: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const Button = ({ className, title, isLoading, ...props }: ButtonProps) => {
  return (
    <m.button
      aria-label={title}
      className={cn(
        "relative min-w-max overflow-hidden rounded-[5px] flex justify-center items-center border-2 border-cyan px-5 py-3 text-base md:px-5 md:py-3 md:text-lg text-white duration-100 after:absolute after:right-full after:top-0 after:-z-[1] after:h-full after:w-full after:bg-cyan after:duration-200",
        className,
        {
          "hover:after:right-0": !isLoading,
          "hover:shadow-hovered-glow": !isLoading,
        }
      )}
      {...props}
    >
      {isLoading && <ImSpinner2 className={"animate-spin absolute"} />}
      <span className={`${isLoading ? "opacity-0" : "opacity-1"}`}>
        {title}
      </span>
    </m.button>
  );
};

export default Button;
