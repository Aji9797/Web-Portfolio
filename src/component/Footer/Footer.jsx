import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AJI MAULUDIN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portofolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/Aji9797">
          <FaGithub />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aji-mauludin-3a3074237/">
          <IoLogoLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aji MAuludin, All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
