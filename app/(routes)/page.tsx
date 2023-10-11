import GoDownArrow from "@components/common/GoDownArrow";
import LinkButton from "@components/common/LinkButton";

export default function Home() {
  return (
    <section className="flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-center gap-5 md:gap-6 px-4">
      <div className="flex flex-col items-center justify-center text-white">
        <h3 className="whitespace-nowrap border-r-2 border-r-transparent text-center text-base text-white/70 md:text-xl">
          Hi, My name is
        </h3>
        <h1 className="text-bold flex flex-col items-center justify-center text-center text-[max(7vw,34px)] leading-tight md:text-6xl md:leading-[1.15]">
          <span className="flex gap-2 whitespace-nowrap border-r-2 border-r-transparent text-cyan [word-spacing:-4px]">
            Zeyad Saeed
          </span>
          Full Stack Developer
        </h1>
      </div>

      <LinkButton href="/about" title="Discover More" />
      <GoDownArrow />
    </section>
  );
}
