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
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML/CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi title="FastAPI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics title="Google Analytics" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop title="Photoshop" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass title="SASS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress title="WordPress" />
      </Col>
    </Row>
  );
}

export default Techstack;
