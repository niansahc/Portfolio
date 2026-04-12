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
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity title="Audacity" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen title="CodePen" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite title="SQLite" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome title="Chrome DevTools" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira" />
      </Col>
    </Row>
  );
}

export default Toolstack;
