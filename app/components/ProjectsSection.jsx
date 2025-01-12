"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Student Result Management System",
    description: "Frontend: ReactJS, Backend: NodeJs & Express, Database: MySql",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/14janhavi/Student-Result-Management-System",
    previewUrl: "https://result-management-system-vl7p.onrender.com/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Frontend: Html, CSS, JS",
    image: "/images/projects/2.png",
    gitUrl: "/",
    previewUrl: "https://662781d72a2e2cc8a7bc8bd5--genuine-truffle-b36010.netlify.app/#food",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Frontend: ReactJS- NextJS",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/14janhavi/My-Portfolio",
    previewUrl: "http://localhost:3000/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Frontend: ReactJS, Backend: NodeJS, Database: MongoDB",
    image: "/images/projects/4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ATM Interface",
    description: "Language: Java",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/14janhavi/CODSOFT-Java/tree/main/Task-3",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-12 text-white"
      style={{ background: "inherit" }} // Ensures the background remains unchanged
    >
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
