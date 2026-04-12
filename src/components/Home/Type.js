import React from "react";
import Typewriter from "typewriter-effect";
//https://www.npmjs.com/package/typewriter-effect for customizations and features 

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Ethics & Governance",
          "Human-Centered Systems",
          "Builder of Thoughtful Tech",
          "Conservationist. Humanist. Engineer.",
          "I ask 'should we' not just 'can we'",
          "Making Tech More Human",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
