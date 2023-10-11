import Link from "next/link";
import { socialMediaLinks } from "./socialMediaLinks";
import { MotionDiv, MotionSpan } from "@lib/motion";
import {
  borderLeft,
  borderRight,
  childrenVariants,
  containerVariants,
  fade,
  firstLine,
  growWidth,
  secondLine,
  thirdLine,
} from "./navbar.variants";

const TopNavbarDesktop = () => {
  return (
    <MotionDiv
      initial="hidden"
      animate="show"
      className="hidden items-center pt-12 md:flex"
    >
      <div className="relative h-[2px] shrink-[10] w-full">
        <MotionSpan
          variants={firstLine}
          className="absolute top-1/2 h-[2px] w-full bg-cyan"
        />
      </div>

      <div className="flex w-full max-w-7xl shrink-[1] items-center justify-between">
        <MotionDiv variants={containerVariants} className="z-50 flex gap-5">
          {socialMediaLinks.map((link) => (
            <MotionDiv key={link.label} variants={childrenVariants}>
              <Link href={link.url} target="_blank" aria-label={link.label}>
                {link.icon()}
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>

        <div className="relative h-[2px] w-full">
          <MotionSpan
            variants={secondLine}
            className="middleLine absolute top-1/2 h-[2px] w-full bg-cyan"
          />
        </div>

        <Link
          href="/contact"
          className={`relative min-w-max overflow-hidden rounded-[5px] border-cyan px-5 py-3 text-white duration-100 after:absolute after:right-full after:top-0 after:-z-[1] after:h-full after:w-full after:bg-cyan after:duration-200 hover:shadow-hovered-glow hover:after:right-0`}
        >
          <MotionDiv
            variants={borderLeft}
            className="absolute left-0 top-1/2 h-full w-[2px] -translate-y-1/2 bg-cyan"
          ></MotionDiv>
          <MotionDiv
            variants={growWidth}
            className="absolute left-0 top-0 h-[2px] w-full bg-cyan"
          ></MotionDiv>
          <MotionDiv
            variants={growWidth}
            className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan"
          ></MotionDiv>
          <MotionDiv
            variants={borderRight}
            className="absolute right-0 top-0 h-1/2 w-[2px] bg-cyan"
          ></MotionDiv>
          <MotionDiv
            variants={borderRight}
            className="absolute bottom-0 right-0 h-1/2 w-[2px] bg-cyan"
          ></MotionDiv>

          <MotionSpan variants={fade}>Contact</MotionSpan>
        </Link>
      </div>

      <div className="relative h-[2px] w-full shrink-[10]">
        <MotionSpan
          variants={thirdLine}
          className="lastLine absolute top-1/2 h-[2px] w-full bg-cyan"
        />
      </div>
    </MotionDiv>
  );
};
export default TopNavbarDesktop;
