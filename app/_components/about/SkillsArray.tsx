import Astro from "./icons/Astro";
import Css from "./icons/Css";
import Git from "./icons/Git";
import Html from "./icons/Html";
import Js from "./icons/Js";
import Mongodb from "./icons/Mongodb";
import NextJs from "./icons/NextJs";
import Nodejs from "./icons/Nodejs";
import React from "./icons/React";
import Tailwind from "./icons/Tailwind";
import Ts from "./icons/Ts";

export interface Icon {
  name: string;
  component: JSX.Element;
}

export const icons: Icon[] = [
  {
    name: "HTML",
    component: <Html />,
  },
  {
    name: "CSS",
    component: <Css />,
  },
  {
    name: "Javascript",
    component: <Js />,
  },
  {
    name: "React",
    component: <React />,
  },
  {
    name: "Next.js",
    component: <NextJs />,
  },
  {
    name: "Astro",
    component: <Astro />,
  },
  {
    name: "Node.js",
    component: <Nodejs />,
  },
  {
    name: "MongoDB",
    component: <Mongodb />,
  },
  {
    name: "Tailwind",
    component: <Tailwind />,
  },
  {
    name: "TypeScript",
    component: <Ts />,
  },
  {
    name: "Git",
    component: <Git />,
  },
];
