"use client";
import SkillsGroup from "./SkillsGroup";
import { MotionDiv, MotionImg } from "@lib/motion";
import { Variants } from "framer-motion";
import { useState } from "react";

const skillsContainer: Variants = {
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const sliderVariants: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      staggerDirection: -1,
      duration: 10,
      ease: "linear",
      delay: 8.2,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 7.7,
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const [initialSliderFinished, setInitialSliderFinished] = useState(false);
  return (
    <MotionDiv
      variants={skillsContainer}
      className="-mt-6 flex w-full justify-center [transform:scale(1)]"
    >
      <MotionImg
        src="/triangle.svg"
        width={45}
        height={130}
        variants={imgVariants}
        className="relative z-10 select-none left-3"
        alt="Triangle Right"
      />

      <div className="flex h-[130px] max-w-[calc((42px*11)+(16px*10))] overflow-hidden">
        <MotionDiv
          onAnimationComplete={() => setInitialSliderFinished(true)}
          variants={sliderVariants}
          className={`sliderContainer flex items-center gap-4 pointer-events-none hover:pauseAnimation ${
            initialSliderFinished ? "animate-slider" : ""
          }`}
        >
          <SkillsGroup />
          <SkillsGroup />
        </MotionDiv>
      </div>

      <MotionImg
        src="/triangle.svg"
        width={45}
        height={130}
        variants={imgVariants}
        className="relative -scale-x-100 select-none right-3"
        alt="Triangle Lift"
      />
    </MotionDiv>
  );
};
export default Skills;
