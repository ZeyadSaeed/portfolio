"use client";
import PageTitle from "@components/common/PageTitle";
import Description from "@components/projects/Description";
import Pagination from "@components/projects/Pagination";
import ProjectImage from "@components/projects/ProjectImage";
import { useState } from "react";

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(1);
  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop mb-6 md:mb-0 flex-col items-center justify-start lg:justify-between gap-8 md:gap-10 text-white lg:pt-16">
      <PageTitle title="Projects" />

      <div className="flex gap-6 md:gap-11 flex-col lg:flex-row w-full justify-center">
        <ProjectImage />
        <div className="flex flex-col-reverse lg:flex-col lg:gap-6 gap-10">
          <Pagination
            activeProjectId={activeProjectId}
            setActiveProjectId={setActiveProjectId}
          />
          <Description activeProjectId={activeProjectId} />
        </div>
      </div>
    </section>
  );
}
