import React from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  img: string;
  title: string;
  demo: string;
  code: string;
};

function ProjectMap({ projects }: { projects: Project[] }) {
  return (
    <div className="project--cards--container">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
}

export default ProjectMap;
