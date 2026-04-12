import React from "react";
import Typewriter from "typewriter-effect";
//https://www.npmjs.com/package/typewriter-effect for customizations and features 

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Systems Thinker",
          "Accessibility Advocate",
          "AI Ethics Researcher",
          "Trauma-Informed Technologist",
          "Proudly Neurodivergent",
          "QA Engineer",
          "Chaos Witch",
          "Octopus Enthusiast",
          "Bug Finder. Question Asker. Trouble Maker.",
          "Human-Centered by Default",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
