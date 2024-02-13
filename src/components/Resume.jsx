import React from "react";
import "../styles/resumeStyles.css"
import resume from "../assets/RMlitten.pdf"
const Resume = () => {
  return (
    <section id="resume" class="page-section">
      <embed
        src={resume}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="500px"
        width="100%"
      ></embed>
    </section>
  );
};

export default Resume;
