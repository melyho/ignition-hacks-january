import React from "react";

type Props = {};
/*
 Todos: Make page responsive.
 */
const Hero = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: "0.25rem",
        height: "70%",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>Ignition Hacks</h1>
      <h2 style={{ fontSize: "2rem", color: "#FFA4DD" }}>
        in-person hackathon / July 2025
      </h2>
      <button
        style={{
          marginTop: "1vh",
          padding: "1rem",
          background: "inherit",
          fontSize: "1.25rem",
          color: "white",
          borderColor: "white",
          borderWidth: "2px",
          borderRadius: "8px",
          width: "15vw",
          height: "5vh",
          textAlign: "center",
          lineHeight: "0vh",
        }}
      >
        Explore More
      </button>
    </div>
  );
};

export default Hero;
