import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={5} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="orange"> EXCITES </span> ME
            </h1>
            <div className="home-about-body">
              <p>
                I'm passionate about user experience and accessibility. A
                system that excludes people by default isn't a neutral choice.
              </p>
              <p>
                I love that technology rarely has one right answer. The same
                problem built ten different ways tells you ten different things
                about who built it and what they valued.
              </p>
              <p>
                AI is fascinating and frightening in equal measure. I believe
                in its potential to elevate human creativity and connection. I
                also know what humans do with powerful tools when there are no
                guardrails and no accountability.
              </p>
              <p>
                I'm here for the beautiful things we can make while we protect
                one another, our communities, and our planet.
              </p>
            </div>
          </Col>
          <Col md={1} className="myAnimation">
                      
              <div class="octopus" alt="animated octopus named Hubert">
                    <div class="leg-1"></div>
                    <div class="head-shape"></div>
                    <div class="octopus-head">
                    <div class="eyes"></div>
                    <div class="blush"></div>
                    <div class="mouth"></div>
                </div>
    </div>
                      </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
               <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niansahc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                </li>
      
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mchastainflournoy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
