import Image from "next/image";
import triangle from "../../images/triangle.svg";
import SkillsGroup from "./SkillsGroup";

const Skills = () => {
  return (
    <div className="-mt-6 flex w-full justify-center [transform:scale(1)]">
      <Image
        src="/triangle.svg"
        width={45}
        height={130}
        className="relative z-10 select-none left-3"
        alt="Triangle Right"
      />

      <div className="flex h-[130px] max-w-[calc((42px*11)+(16px*10))] overflow-hidden">
        <div className="sliderContainer flex animate-slider items-center gap-4">
          <SkillsGroup />
          <SkillsGroup />
        </div>
      </div>

      <Image
        src="/triangle.svg"
        width={45}
        height={130}
        className="relative -scale-x-100 select-none right-3"
        alt="Triangle Lift"
      />
    </div>
  );
};
export default Skills;
