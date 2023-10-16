import { MotionButton, MotionDiv } from "@lib/motion";
import { Project, projects } from "./projects";
import { Variants } from "framer-motion";

type Props = {
  selectedProject: Project;
  setSelectedProject: (project: Project) => void;
};

const paginationVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    x: 20,
    y: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const Pagination = ({ selectedProject, setSelectedProject }: Props) => {
  return (
    <MotionDiv
      variants={paginationVariants}
      className="flex justify-center gap-2 lg:justify-start flex-wrap"
    >
      {projects.map((project) => (
        <MotionButton
          variants={buttonVariants}
          key={project.id}
          className={`rounded-sm border border-cyan px-3 py-1 ${
            project.id === selectedProject.id ? "bg-cyan" : "hover:bg-cyan/50"
          }`}
          onClick={() => setSelectedProject(project)}
        >
          {project.id}
        </MotionButton>
      ))}
    </MotionDiv>
  );
};
export default Pagination;
