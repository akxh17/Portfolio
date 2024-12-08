import React from "react";
import Image from "next/image";

function HomePage() {
  return (
    <div className="home--container" id="home">
      <Image
        src="/Images/akash.png"
        width={450}
        height={450}
        alt="Profile Image"
        className="profile--image"
      />
      <div className="profile--details">
        <p>Hi, I am</p>
        <h1>Akash Suresh</h1>
        <h3>Software Engineer</h3>
      </div>
    </div>
  );
}

export default HomePage;
