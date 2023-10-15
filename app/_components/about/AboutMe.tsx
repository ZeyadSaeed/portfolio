import { MotionP, MotionSpan } from "@lib/motion";
import { Variants } from "framer-motion";

const aboutMe = `I am Zeyad Saeed, a highly experienced Full Stack Developer with a strong
passion for building innovative digital solutions. With an extensive
background in front-end and back-end development, I have a proven track
record of turning concepts into user-friendly web applications. I am
extremely committed to staying ahead of industry trends, ensuring that I
always deliver top quality results. I pride myself on being able to solve
complex problems with innovative solutions. My approach is to work closely
with clients, understand their goals and translate their ideas into
digital reality. This leads to increased online presence and user success.
That’s my skill set.`;

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.01,
      delayChildren: 1,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const childrenVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AboutMe = () => {
  const aboutMeArr = aboutMe.split("");

  return (
    <MotionP
      variants={containerVariants}
      aria-label={aboutMe}
      className="max-w-[690px] text-sm md:text-base text-justify justify-distribute "
    >
      {aboutMeArr.map((char, i) => (
        <MotionSpan aria-hidden variants={childrenVariants} key={i}>
          {char}
        </MotionSpan>
      ))}
    </MotionP>
  );
};
export default AboutMe;
