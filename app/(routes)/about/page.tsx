import AboutMe from "@components/about/AboutMe";
import Skills from "@components/about/Skills";
import GoDownArrow from "@components/common/GoDownArrow";
import PageTitle from "@components/common/PageTitle";

export default function About() {
  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-center gap-6 md:gap-10 text-white">
      <PageTitle title="About Me" exitDelay={0.3} />
      <AboutMe />
      <Skills />
      <GoDownArrow />
    </section>
  );
}
