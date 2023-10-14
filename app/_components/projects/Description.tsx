import Button from "@components/common/Button";
import { projects } from "./projects";
import LinkButton from "@components/common/LinkButton";
import { MotionDiv, MotionH1, MotionP } from "@lib/motion";
import { Variants } from "framer-motion";

const Description = ({
  activeProjectId,
  isFirstRender,
}: {
  activeProjectId: number;
  isFirstRender: boolean;
}) => {
  const index = activeProjectId - 1;
  const codeLink = projects[index].links.code;

  const parentVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: isFirstRender ? 2.8 : 0,
      },
    },
  };

  const childrenVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        transition: 0.3,
      },
    },
  };

  const buttonsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: isFirstRender ? 3.2 : 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <MotionDiv
      variants={parentVariants}
      className="flex flex-col gap-4 whitespace-break-spaces md:gap-6 lg:max-w-xl "
    >
      <MotionH1 variants={childrenVariants} className="text-3xl md:text-5xl">
        {projects[index].title}
      </MotionH1>
      <MotionP variants={childrenVariants} className="max-w-xl">
        {projects[index].description}
      </MotionP>

      <MotionDiv
        variants={buttonsVariants}
        className="xs:flex-nowrap grid grid-cols-1 xxs:grid-cols-2 gap-2"
      >
        <LinkButton
          title="View Site"
          href={projects[index].links.site}
          className="w-full text-sm"
          target="_blank"
        />
        {codeLink && (
          <LinkButton
            title="View Code"
            href={codeLink}
            className="w-full text-sm"
            target="_blank"
          />
        )}

        <Button
          title="View More"
          className={`w-full text-sm ${codeLink ? "xxs:col-span-2" : ""}`}
        />
      </MotionDiv>
    </MotionDiv>
  );
};
export default Description;
