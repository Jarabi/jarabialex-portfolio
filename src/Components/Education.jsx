import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      {/* grid  of 4 education cells */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          paddingTop: "3rem",
        }}
      >
        <div>
          <h3>University of California, Berkeley</h3>
          <p>Bachelor of Science in Electrical Engineering and Computer Science</p>
          <p>Graduated: May 2018</p>
        </div>
        <div>
          <h3>University of California, Berkeley</h3>
          <p>Full Stack Web Development Bootcamp</p>
          <p>Graduated: May 2021</p>
        </div>
        <div>
          <h3>University of California, Berkeley</h3>
          <p>Master of Science in Electrical Engineering and Computer Science</p>
          <p>Graduated: May 2023</p>
        </div>
        <div>
          <h3>University of California, Berkeley</h3>
          <p>Master of Science in Electrical Engineering and Computer Science</p>
          <p>Graduated: May 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
