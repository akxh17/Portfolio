import React from "react";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="contact--container">
      <h1>Contact</h1>
      <div className="contact--link--container">
        <Link
          href="mailto:ask.akash02@gmail.com"
          target="_blank"
          className="contact--link"
        >
          <TfiEmail className="link--icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/akash-suresh-509a87276/"
          target="_blank"
          className="contact--link"
        >
          <FaLinkedinIn className="link--icon" />
        </Link>
        <Link
          href="https://github.com/akxh17"
          target="_blank"
          className="contact--link"
        >
          <FiGithub className="link--icon" />
        </Link>
        <Link
          href="https://x.com/AKASHSURESH1714"
          target="_blank"
          className="contact--link"
        >
          <BsTwitterX className="link--icon" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
