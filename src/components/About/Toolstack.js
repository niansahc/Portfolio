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
      <Col title="VS Code" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col title="Audacity" xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col title="CodePen" xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>
      <Col title="Docker" xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col title="MySQL" xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col title="SQLite" xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col>
      <Col title="GitHub" xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col title="Chrome DevTools" xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>
      <Col title="Canva" xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col title="Jira" xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
  );
}

export default Toolstack;
