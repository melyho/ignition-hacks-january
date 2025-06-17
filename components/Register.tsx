"use client";

import React, { useState } from "react";

export default function RegisterButton() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSf3kNu2WlKENNfGuWwK9oLLSzKz31RFqZ-Qv_JbxU_unmjCPg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginTop: "1vh",
        padding: "1rem",
        transform: hover ? "scale(1.05)" : "scale(1)",
        fontSize: "1.25rem",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        borderRadius: "8px",
        width: "15vw",
        height: "5vh",
        textAlign: "center",
        lineHeight: "0vh",
        textDecoration: "none",
        borderStyle: "solid",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        zIndex: 1000
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Register Here
    </a>
  );
}