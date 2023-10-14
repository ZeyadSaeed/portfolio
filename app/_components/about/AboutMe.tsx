import { MotionP, MotionSpan } from "@lib/motion";
import { Variants } from "framer-motion";

const aboutMe = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
  mollitia laborum repellendus reiciendis ipsa inventore minus, fuga cum
  harum voluptas suscipit architecto est quam dignissimos debitis deleniti
  sit veritatis temporibus, quaerat dolores ea consectetur. Aspernatur id
  maxime laborum molestias reprehenderit, tempora eum necessitatibus
  mollitia sapiente. Exercitationem laudantium obcaecati, expedita, ut
  alias quisquam nam sequi voluptatibus est porro adipisci, laborum labore
  veritatis culpa! Optio doloremque ducimus fugit sapiente nisi aut quis
  sequi expedita minima esse suscipit recusandae. And thats my skills`;

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
      className="max-w-[690px] text-sm md:text-base text-justify [word-spacing:-1.4px]"
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
