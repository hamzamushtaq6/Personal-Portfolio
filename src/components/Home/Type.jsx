import React from "react";
import Typewriter from "typewriter-effect";
import "../../../style.css"

function Type() {
  return (
    <Typewriter
    className="typewriter-text"
      options={{
        strings: [
          "AI Operator",
          "Software Developer",
          "Product Building",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}

    />
  );
}

export default Type;
