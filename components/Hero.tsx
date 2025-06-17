import React from "react";
import RegisterButton from "./Register";

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
      <h1 style={{ fontSize: "4rem", color: "#FFFFFF" }}>Ignition Hacks</h1>
      <h2 style={{ fontSize: "2rem", color: "#FFA4DD" }}>
        in-person hackathon / August 2025
      </h2>

      <RegisterButton/>
    </div >
  );
};

export default Hero;
