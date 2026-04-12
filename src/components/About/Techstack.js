import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiHtml5,
  DiNodejs,
  DiReact,
  DiPython,
  DiGit,
  DiGoogleAnalytics,
  DiPhotoshop,
  DiSass,
  DiWordpress,
} from "react-icons/di";
import {
  SiTypescript,
  SiCsharp,
  SiFastapi,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="JavaScript" xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col title="HTML/CSS" xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col title="TypeScript" xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col title="Node" xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col title="React" xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col title="Python" xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col title="C#" xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col title="FastAPI" xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col title="Git" xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col title="Google Analytics" xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics />
      </Col>
      <Col title="Photoshop" xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col title="SASS" xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col title="WordPress" xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
    </Row>
  );
}

export default Techstack;
