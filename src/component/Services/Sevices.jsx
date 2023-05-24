import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Sevices = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="Service">
          <div className="Service_head">
            <h3> Web Develovment </h3>
          </div>
          <ul className="Service_List">
            <li>
              <BiCheck className="Service_list-icon" />
              <p>Membuat Web eCommarce.</p>
            </li>

            <li>
              <BiCheck className="Service_list-icon" />
              <p>Membuat Web Company Profile & Portfolio</p>
            </li>

            <li>
              <BiCheck className="Service_list-icon" />
              <p>Membuat Aplikasi Web.</p>
            </li>
          </ul>
        </article>
        {/*END Of Web Develovment*/}

        <article className="Service">
          <div className="Service_head">
            <h3>IT</h3>
          </div>

          <ul className="Service_List">
            <li>
              <BiCheck className="Service_list-icon" />
              <p>Instalasi Sofware, Hardware Komputer & Laptop.</p>
            </li>

            <li>
              <BiCheck className="Service_list-icon" />
              <p>Instalasi, Desain dan Pemeliharaan Jaringan.</p>
            </li>

            <li>
              <BiCheck className="Service_list-icon" />
              <p>Instalasi, Desain dan Pemeliharaan Server.</p>
            </li>
          </ul>
        </article>
        {/*IT*/}
      </div>
    </section>
  );
};

export default Sevices;
