import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container Experience_container">
        <div className="Experience_frontend">
          <h3>Frontend Develovment</h3>
          <div className="Experience_content">
            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                {" "}
                <h4>Javascript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*End Of Front End*/}

        <div className="Experience_backend">
          <h3>Backend Development</h3>
          <div className="Experience_content">
            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>Monggo DB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                {" "}
                <h4>MySql</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="Experience_details">
              <BsPatchCheckFill className="Experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
