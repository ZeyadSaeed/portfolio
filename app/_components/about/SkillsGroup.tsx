import { icons } from "./SkillsArray";

const SkillsGroup = () => {
  return (
    <>
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="group relative h-[46px] opacity-40 duration-300 hover:opacity-100"
        >
          <div
            className="absolute -top-[42px] left-1/2 hidden min-w-max -translate-x-1/2 rounded-sm bg-white px-2 py-1 text-sm font-bold text-background after:absolute 
                after:-bottom-3 after:left-1/2 after:h-3 after:-translate-x-1/2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-white group-hover:block"
          >
            {icon.name}
          </div>
          {icon.component}
        </div>
      ))}
    </>
  );
};

export default SkillsGroup;
