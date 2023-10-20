import PageTitle from "@components/common/PageTitle";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import GoDownArrow from "@components/common/GoDownArrow";

const AboutContainer = () => {
  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-center gap-6 md:gap-10 text-white">
      <PageTitle title="About Me" />
      <AboutMe />
      <Skills />
      <GoDownArrow />
    </section>
  );
};
export default AboutContainer;
