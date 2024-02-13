import React from "react";
import "../styles/resumeStyles.css"
const Resume = () => {
  return (
    <section id="resume" class="page-section">
      <embed
        src="../src/assets/RMlitten.pdf"
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
