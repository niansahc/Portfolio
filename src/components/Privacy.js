import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

function Privacy() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ paddingTop: "100px", paddingBottom: "50px", maxWidth: "700px" }}>
        <h1 className="project-heading">
          <strong className="orange">Privacy</strong>
        </h1>
        <div style={{ color: "white", fontSize: "1.1em", lineHeight: "1.8", textAlign: "left" }}>
          <p>
            This site doesn't collect your data. There are no analytics, no
            cookies, no tracking scripts, and no forms that store personal
            information.
          </p>
          <p>
            The site is hosted on Netlify, which logs IP addresses as part of
            its infrastructure. That's standard web hosting. I don't have access
            to individual visitor data. See{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--imp-text-color)" }}
            >
              Netlify's privacy policy
            </a>{" "}
            for their specifics.
          </p>
          <p>
            The Self-Care 8 Ball and Colour Moods apps run entirely in your
            browser. Nothing you type or click is sent anywhere or stored
            anywhere.
          </p>
          <p>If anything about this changes, this page will be updated.</p>
        </div>
      </Container>
    </Container>
  );
}

export default Privacy;
