import React from "react";

type Props = {};
/*
 Todos: Make page responsive.
 */
const About = (props: Props) => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          alignItems: "center",

          width: "45%",
          position: "relative",
          textAlign: "center",
          paddingTop: "10vh",
          color: "white",
        }}
      >
        <h1
          style={{ marginBottom: "5vh", fontSize: "3rem", fontWeight: "bold", color: "#FFFFFF"}}
        >
          What is Ignition Hacks?
        </h1>
        <p
          style={{
            marginBottom: "3vh",
            fontSize: "1.2rem",
            color: "#FFA4DD",
            fontWeight: "bold",
          }}
        >
          Ignition Hacks is a student-led hackathon dedicated to empowering the
          next generation of innovators, problem solvers, coders, and
          entrepreneurs to pursue their passion for global change.
        </p>
        <p
          style={{
            marginBottom: "3vh",
            fontSize: "1.2rem",
            color: "#FFA4DD",
            fontWeight: "bold",
          }}
        >
          This year, we are creating more than just a hackathon, we want to use
          our platform to build an organization aimed at supporting tech
          education and opportunities for students to help them prepare for a
          growing technology industry.
        </p>
        <p
          style={{
            marginBottom: "10px",
            fontSize: "1.2rem",
            color: "#FFA4DD",
            fontWeight: "bold",
          }}
        >
          Last year, we supported 600+ participants internationally within a
          hackathon environment offering activities such as 15+ workshops on the
          varying industries in tech, 1-1 mentorship opportunities, co-op fairs,
          and more, all while creating their products and fostering a supportive
          hub to help them prepare for the careers of the future.
        </p>
        <img src="about section/underline.svg" width={"100%"} />
      </div>
      <img
        src="about section/left-side.svg"
        height={"100%"}
        width={"25%"}
        style={{ position: "absolute", left: "0", top: "0" }}
      />
      <img
        src="about section/right-side.svg"
        width={"25%"}
        height={"100%"}
        style={{ position: "absolute", right: "0", top: "0" }}
      />
    </div>
  );
};

export default About;
