import Button from "@components/common/Button";
import { projects } from "./projects";
import LinkButton from "@components/common/LinkButton";

const Description = ({ activeProjectId }: { activeProjectId: number }) => {
  const index = activeProjectId - 1;
  const codeLink = projects[index].links.code;

  return (
    <div className="flex flex-col gap-4 whitespace-break-spaces md:gap-6 lg:max-w-xl ">
      <h1 className="text-3xl md:text-5xl">{projects[index].title}</h1>
      <p className="max-w-xl">{projects[index].description}</p>

      <div className="xs:flex-nowrap grid grid-cols-1 xxs:grid-cols-2 gap-2">
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
      </div>
    </div>
  );
};
export default Description;
