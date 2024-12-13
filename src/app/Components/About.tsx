import React from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

function About() {
  return (
    <div className="about--container" id="about">
      <h1>About</h1>
      <div className="about--detail--container">
        <IoIosArrowDropright className="arrow--symbol" />
        <p>
          Hi, I&apos;m a passionate Frontend Developer with expertise in Next.js
          and TypeScript, specializing in crafting dynamic, user-friendly, and
          responsive interfaces. My focus is on delivering seamless digital
          experiences through clean, efficient code, while prioritizing
          accessibility, performance optimization, and modern design principles.
          With a commitment to continuous learning and staying updated on the
          latest UI/UX trends, I aim to create innovative solutions that
          translate user needs into impactful, visually appealing web
          applications.
        </p>
      </div>
      <button className="about--button">
        <Link
          href="/Akash_Suresh_Resume.pdf"
          target="_blank"
          prefetch={false}
          className="download--link"
        >
          Download Resume
        </Link>
      </button>
    </div>
  );
}

export default About;
