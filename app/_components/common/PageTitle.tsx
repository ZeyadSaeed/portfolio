import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="relative pb-3 text-3xl text-white md:pb-5 md:text-5xl after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:bg-cyan after:shadow-cyan-glow">
      {title}
    </h1>
  );
};

export default PageTitle;
