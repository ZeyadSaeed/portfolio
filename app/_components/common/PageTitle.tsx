import { MotionH1, MotionSpan } from "@lib/motion";
import { Variants } from "framer-motion";
import React from "react";

const PageTitle = ({
  title,
  exitDelay = 0.2,
}: {
  title: string;
  exitDelay: number;
}) => {
  const variants: Variants = {
    hidden: {
      y: 60,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: exitDelay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <MotionH1 className="relative pb-3 text-3xl text-white md:pb-5 md:text-5xl overflow-hidden">
      <MotionSpan variants={variants} className="block">
        {title}
      </MotionSpan>
      <MotionSpan
        variants={lineVariants}
        className="absolute bottom-0 left-0 right-0 h-[2px] w-full bg-cyan shadow-cyan-glow"
      />
    </MotionH1>
  );
};

export default PageTitle;
