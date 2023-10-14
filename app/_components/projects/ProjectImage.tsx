import { MotionDiv } from "@lib/motion";
import Image from "next/image";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ProjectImage = ({ isFirstRender }: { isFirstRender: boolean }) => {
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
      className="h-[140px] w-full lg:h-[600px] lg:w-[477px] rounded-md bg-white lg:rounded-b-none"
    >
      {/* <Image src="/astro.svg" width={200} height={200} alt="" /> */}
    </MotionDiv>
  );
};
export default ProjectImage;
