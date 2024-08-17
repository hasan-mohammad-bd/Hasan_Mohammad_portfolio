import React from "react";
import { SingleProjects } from "./components/SingleProjects";
import MyProject from "../Home/MyProject";

const projectData = [
  {
    title: "ERP - Accounts, HRM (Ongoing)",
    href: "http://amarsolution.xyz/",
    heading: "ERP project - Accounts, HRM",
    description:
      "This is a ongoing ERP project, building for large scale company `email: admin@gmail.com, password: 123456`",
    technology:
      "Typescript, React, shadecn/UI, React Router, Tailwind, React hook form, Redux",
    img: "https://i.ibb.co/H2vkkVs/akaarERP.png",
  },
  {
    title: "PinkFlash online",
    href: "https://www.pinkflashonline.com/",
    heading: "PinkFlash online",
    description: "An E-commerce site for online shopping.",
    technology:
      "Javascript, Next.js, Next auth, Tailwind, Redux, React hook form ",
    img: "https://i.ibb.co/Y8Bp6h7/pinkflash.png",
  },
  {
    title: "Cloudia Kitchen Accessories",
    href: "https://www.pinkflashonline.com/",
    heading: "Cloudia Kitchen Accessories",
    description: "Its a wholesaler website for kitchen accessories.",
    technology:
      "React Js, Tailwind CSS, DaisyUI,Firebase Authentication, Node, MongoDB, Express Js, JWT Token, React Query, React hook form, Stripe",
    img: "https://i.ibb.co/PD8cZbz/coludiakitchen.png",
  },
  {
    title: "Cloudia Kitchen Accessories",
    href: "https://www.pinkflashonline.com/",
    heading: "Cloudia Kitchen Accessories",
    description: "Its a wholesaler website for kitchen accessories.",
    technology:
      "React Js, Tailwind CSS, DaisyUI,Firebase Authentication, Node, MongoDB, Express Js, JWT Token, React Query, React hook form, Stripe",
    img: "https://i.ibb.co/PD8cZbz/coludiakitchen.png",
  },
];

const Projects = () => {
  return (
    <div className="mt-10">
      <div>
        <div class="sign ">
          <span class="sign__word">Recent Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projectData.map((project, index) => (
          <SingleProjects
            key={index}
            title={project.title}
            href={project.href}
            heading={project.heading}
            description={project.description}
            technology={project.technology}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
