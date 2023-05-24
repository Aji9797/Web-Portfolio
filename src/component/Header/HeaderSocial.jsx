import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="Header_Social">
      <a href="https://github.com" target="">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/aji-mauludin-3a3074237/" target="">
        <IoLogoLinkedin />
      </a>
      <a href="https://instagram.com" target="">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
