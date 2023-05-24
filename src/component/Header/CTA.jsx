import React from "react";
import CV from "../../assets/CV_AJI_MAULUDIN.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Ayo Berbincang
      </a>
    </div>
  );
}

export default CTA;
