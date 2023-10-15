import { MotionDiv } from "@lib/motion";
import Image from "next/image";
import { Project } from "./projects";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ProjectImage = ({
  isFirstRender,
  project,
}: {
  isFirstRender: boolean;
  project: Project;
}) => {
  const imgVariants = {
    hidden: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask },
    visible: {
      WebkitMaskImage: visibleMask,
      maskImage: visibleMask,
      transition: {
        delay: isFirstRender ? 2 : 0,
        duration: 0.8,
      },
    },
    exit: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask },
  };

  return (
    <MotionDiv
      variants={imgVariants}
      className="h-[140px] w-full lg:h-[585px] lg:w-[477px] rounded-md bg-black lg:rounded-b-none relative"
    >
      <picture className="absolute inset-0">
        <source media="(min-width:1024px)" srcSet={project.image.desktop} />
        <Image
          src={project.image.phone}
          fill
          sizes="100%"
          className="object-cover"
          alt=""
        />
      </picture>
    </MotionDiv>
  );
};
export default ProjectImage;
