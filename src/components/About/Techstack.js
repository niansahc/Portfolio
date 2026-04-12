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
        <span aria-label="JavaScript" title="JavaScript"><DiJavascript1 aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="HTML/CSS" title="HTML/CSS"><DiHtml5 aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="TypeScript" title="TypeScript"><SiTypescript aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="Node" title="Node"><DiNodejs aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="React" title="React"><DiReact aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="Python" title="Python"><DiPython aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="C#" title="C#"><SiCsharp aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="FastAPI" title="FastAPI"><SiFastapi aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="Git" title="Git"><DiGit aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="Google Analytics" title="Google Analytics"><DiGoogleAnalytics aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="Photoshop" title="Photoshop"><DiPhotoshop aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="SASS" title="SASS"><DiSass aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span aria-label="WordPress" title="WordPress"><DiWordpress aria-hidden="true" /></span>
      </Col>
    </Row>
  );
}

export default Techstack;
