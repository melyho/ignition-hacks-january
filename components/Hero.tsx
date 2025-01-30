import React from "react";

type Props = {};

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
        height: "70%",
        color: "white",
      }}
    >
      <h1>Ignition Hacks</h1>
      <h2>in-person hackathon / July 2025</h2>
      <button>Explore More</button>
    </div>
  );
};

export default Hero;
