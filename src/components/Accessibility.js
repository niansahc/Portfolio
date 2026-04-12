import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

function Accessibility() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ paddingTop: "100px", paddingBottom: "50px", maxWidth: "700px" }}>
        <h1 className="project-heading">
          <strong className="orange">Accessibility</strong>
        </h1>
        <div style={{ color: "white", fontSize: "1.1em", lineHeight: "1.8", textAlign: "left" }}>
          <p>
            I believe technology should work for everyone. This site targets
            WCAG 2.1 AA conformance.
          </p>
          <p>
            What that means in practice: keyboard navigation works across all
            pages, interactive elements have visible focus indicators, images
            have meaningful alt text, icon-only links and buttons are labeled
            for screen readers, and the page structure uses semantic HTML
            landmarks.
          </p>
          <p>
            Accessibility is tested with axe-core automated tooling on every
            route. The tests currently pass. That said, automated testing
            catches structure, not experience. If something on this site
            doesn't work for you or could work better, I want to know.
          </p>
          <p>
            You can reach me on{" "}
            <a
              href="https://github.com/niansahc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--imp-text-color)" }}
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/mchastainflournoy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--imp-text-color)" }}
            >
              LinkedIn
            </a>{" "}
            (links are in the footer).
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Accessibility;
