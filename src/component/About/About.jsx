import React from "react";
import "./About.css";
import Me from "../../assets/f1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container About_container">
        <div className="About_Me">
          <div className="About_Me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="About_content">
          <div className="About_cards">
            <article className="About_card">
              <FaAward className="About_icon" />
              <h5>Exprience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="About_card">
              <FiUsers className="About_icon" />
              <h5> Clients</h5>
              <small></small>
            </article>

            <article className="About_card">
              <VscFolderLibrary className="About_icon" />
              <h5> Project</h5>
              <small>5 Complated</small>
            </article>
          </div>

          <p>
            D3 Komputer Akuntansi memilik ketertarikan dibidang Web Devlopment
            dan IT Support. Memahmi beberapa bahasa pemograman dan berpengalaman
            dalam troubleshoting hardware dan software. Terbuka untuk peluang
            kerja di bagian IT & Web Developer.
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
