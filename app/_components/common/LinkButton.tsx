import { MotionDiv } from "@lib/motion";
import { cn } from "@lib/utils";
import { Variants } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  title: string;
  href: string;
  target?: "_blank" | "_self";
  variant?: Variants;
};

const LinkButton = ({
  className,
  href,
  title,
  target = "_self",
  variant,
}: ButtonProps) => {
  return (
    <MotionDiv
      className={cn(
        "relative min-w-max text-center overflow-hidden text-base rounded-[5px] text-white duration-100 after:absolute after:right-full after:top-0 after:-z-[1] after:h-full after:w-full after:bg-cyan after:duration-200 hover:shadow-hovered-glow hover:after:right-0 md:text-lg",
        className
      )}
      variants={variant}
    >
      <Link
        href={href}
        aria-label={title}
        className="px-5 py-3 md:px-5 md:py-3 block border-2 rounded-[5px] border-cyan"
        target={target}
      >
        {title}
      </Link>
    </MotionDiv>
  );
};

export default LinkButton;
