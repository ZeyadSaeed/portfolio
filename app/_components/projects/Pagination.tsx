import { projects } from "./projects";

type Props = {
  activeProjectId: number;
  setActiveProjectId: (id: number) => void;
};

const Pagination = ({ activeProjectId, setActiveProjectId }: Props) => {
  return (
    <div className="flex justify-center gap-2 lg:justify-start">
      {projects.map((project) => (
        <button
          key={project.id}
          className={`rounded-sm border border-cyan px-3 py-1 duration-300 ${
            project.id === activeProjectId ? "bg-cyan" : "hover:bg-cyan/50"
          }`}
          onClick={() => setActiveProjectId(project.id)}
        >
          {project.id}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
