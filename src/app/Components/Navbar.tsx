"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar--container">
      <div className="nav--header">
        <Link href="/" className="nav--title--link">
          Portfolio
        </Link>
        <IoReorderThreeOutline
          className="menu--button"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>
      <div className={`link--container ${menu ? "active" : ""} `}>
        <Link href="#home" className="nav--link">
          Home
        </Link>
        <Link href="#about" className="nav--link">
          About
        </Link>
        <Link href="#projects" className="nav--link">
          Projects
        </Link>
        <Link href="#contact" className="nav--link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
