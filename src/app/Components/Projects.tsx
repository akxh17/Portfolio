import React from "react";
import ProjectMap from "./ProjectMap";
import { headers } from "next/headers";

async function Projects() {
  const headersInstance = await headers();
  const host = headersInstance.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/project_data`);
  const data = await response.json();
  return (
    <div className="projects--container" id="projects">
      <h1>Projects</h1>
      <ProjectMap projects={data} />
    </div>
  );
}

export default Projects;
