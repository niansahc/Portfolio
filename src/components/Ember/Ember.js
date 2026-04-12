import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Ember() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        <h1 className="project-heading">
          <strong className="orange">Ember-2</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2em", maxWidth: "600px", margin: "0 auto" }}>
          A local-first personal intelligence system built for reasoning,
          memory, reflection, and long-term assistance. Coming soon: release
          notes, installers, and research.
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "40px" }}>
          In the meantime, the source is on{" "}
          <a
            href="https://github.com/niansahc/ember-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--imp-text-color)" }}
          >
            GitHub
          </a>.
        </p>
      </Container>
    </Container>
  );
}

export default Ember;
