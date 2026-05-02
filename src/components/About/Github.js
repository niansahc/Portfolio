import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        WATCH ME <strong className="orange">GROW</strong>
      </h1>
      <GitHubCalendar
        username="niansahc"
        blockSize={15}
        blockMargin={5}
        color="#e26144"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
