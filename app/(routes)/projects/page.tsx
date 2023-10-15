"use client";
import PageTitle from "@components/common/PageTitle";
import Description from "@components/projects/Description";
import Pagination from "@components/projects/Pagination";
import ProjectImage from "@components/projects/ProjectImage";
import { Project, projects } from "@components/projects/projects";
import { MotionDiv } from "@lib/motion";
import { AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const firstRender = useRef(true);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, []);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop md:pt-7 md:mb-0 flex-col items-center justify-start lg:justify-between gap-8 md:gap-10 text-white lg:pt-16">
      <PageTitle title="Projects" exitDelay={0.3} />
      <div className="flex flex-col gap-8 justify-center items-center">
        <Pagination
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <AnimatePresence mode="wait">
          <MotionDiv
            key={selectedProject.id}
            initial="hidden"
            animate={isPresent ? "visible" : "exit"}
            exit="exit"
            className="flex gap-6 md:gap-11 flex-col lg:flex-row w-full justify-center"
          >
            <ProjectImage
              isFirstRender={firstRender.current}
              project={selectedProject}
            />
            <Description
              isFirstRender={firstRender.current}
              project={selectedProject}
            />
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
}
