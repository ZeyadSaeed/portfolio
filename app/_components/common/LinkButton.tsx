import { cn } from "@lib/utils";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  title: string;
  href: string;
  target?: "_blank" | "_self";
};

const LinkButton = ({
  className,
  href,
  title,
  target = "_self",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        "relative min-w-max text-center overflow-hidden rounded-[5px] border-2 border-cyan px-5 py-3 text-base text-white duration-100 after:absolute after:right-full after:top-0 after:-z-[1] after:h-full after:w-full after:bg-cyan after:duration-200 hover:shadow-hovered-glow hover:after:right-0 md:px-5 md:py-3 md:text-lg",
        className
      )}
      target={target}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
