import GoDownArrow from "@components/common/GoDownArrow";
import LinkButton from "@components/common/LinkButton";
import { MotionH1, MotionH3, MotionSpan } from "@lib/motion";
import { Variants } from "framer-motion";

const h3Variant: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "max-content",
    transition: {
      duration: 2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const h1Variant = {
  visible: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 2.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const firstNameVariant: Variants = {
  hidden: {
    translateX: -200,
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "bounce",
    },
  },
};
const secondNameVariant: Variants = {
  hidden: {
    translateX: 200,
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "bounce",
    },
  },
};

const roleVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const roleChildrenVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  },
};

const buttonVariant = {
  hidden: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 3.8,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Header = () => {
  return (
    <section className="flex overflow-hidden h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-center gap-5 md:gap-6 px-4">
      <div className="flex flex-col items-center justify-center text-white">
        <MotionH3
          variants={h3Variant}
          className="whitespace-nowrap border-r-2 border-r-transparent animate-type text-center text-base text-white/70 md:text-xl overflow-hidden"
        >
          Hi, My name is
        </MotionH3>
        <MotionH1
          variants={h1Variant}
          className="text-bold items-center justify-center text-center text-[max(7vw,34px)] leading-tight md:text-6xl md:leading-[1.15]"
        >
          <MotionSpan
            variants={firstNameVariant}
            className="whitespace-nowrap text-cyan [word-spacing:-4px] mr-3 inline-block"
          >
            Zeyad
          </MotionSpan>
          <MotionSpan
            variants={secondNameVariant}
            className="whitespace-nowrap text-cyan [word-spacing:-4px] inline-block"
          >
            Saeed
          </MotionSpan>
        </MotionH1>
        <MotionH1
          className="flex gap-3 overflow-hidden text-bold items-center justify-center text-center text-[max(7vw,34px)] leading-tight md:text-6xl md:leading-[1.15]"
          variants={roleVariant}
          aria-label="Full Stack Developer"
        >
          <MotionSpan variants={roleChildrenVariant}>Full</MotionSpan>
          <MotionSpan variants={roleChildrenVariant}>Stack</MotionSpan>
          <MotionSpan variants={roleChildrenVariant}>Developer</MotionSpan>
        </MotionH1>
      </div>

      <LinkButton variant={buttonVariant} href="/about" title="Discover More" />
      <GoDownArrow />
    </section>
  );
};
export default Header;
