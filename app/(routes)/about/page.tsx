import Skills from "@components/about/Skills";
import GoDownArrow from "@components/common/GoDownArrow";
import PageTitle from "@components/common/PageTitle";

export default function About() {
  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-center gap-6 md:gap-10 text-white">
      <PageTitle title="About Me" />

      <p className="max-w-[calc((42px*11)+(16px*10)+(34px*2))] text-sm md:text-base text-justify [word-spacing:-1.4px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        mollitia laborum repellendus reiciendis ipsa inventore minus, fuga cum
        harum voluptas suscipit architecto est quam dignissimos debitis deleniti
        sit veritatis temporibus, quaerat dolores ea consectetur. Aspernatur id
        maxime laborum molestias reprehenderit, tempora eum necessitatibus
        mollitia sapiente. Exercitationem laudantium obcaecati, expedita, ut
        alias quisquam nam sequi voluptatibus est porro adipisci, laborum labore
        veritatis culpa! Optio doloremque ducimus fugit sapiente nisi aut quis
        sequi expedita minima esse suscipit recusandae. And thats my skills
      </p>

      <Skills />
      <GoDownArrow />
    </section>
  );
}
