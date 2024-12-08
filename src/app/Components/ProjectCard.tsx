import React from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  img: string;
  title: string;
  demo: string;
  code: string;
};

function ProjectCard({ data }: { data: Project }) {
  return (
    <div className="project--detail-container">
      <Image
        src={data.img}
        width={250}
        height={270}
        alt={`${data.title}`}
        className="card--image"
      />
      <h3 className="card--heading">{data.title}</h3>
      <div className="card--button">
        <button>
          <Link href={data.demo} target="_blank" className="card--link">
            Demo
          </Link>
        </button>
        <button>
          <Link href={data.code} target="_blank" className="card--link">
            Code
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
