import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiCodepen, DiDocker, DiMysql } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiAudacity,
  SiSqlite,
  SiGithub,
  SiGooglechrome,
  SiCanva,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="VS Code" title="VS Code"><SiVisualstudiocode aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="Audacity" title="Audacity"><SiAudacity aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="CodePen" title="CodePen"><DiCodepen aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="Docker" title="Docker"><DiDocker aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="MySQL" title="MySQL"><DiMysql aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="SQLite" title="SQLite"><SiSqlite aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="GitHub" title="GitHub"><SiGithub aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="Chrome DevTools" title="Chrome DevTools"><SiGooglechrome aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="Canva" title="Canva"><SiCanva aria-hidden="true" /></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="Jira" title="Jira"><SiJira aria-hidden="true" /></span>
      </Col>
    </Row>
  );
}

export default Toolstack;
