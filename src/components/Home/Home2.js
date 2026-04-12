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
                I care about what technology does to people. Not abstractly.
                Specifically. Who gets access. Who gets harmed. What gets
                quietly optimized away.
              </p>
              <p>
                I'm drawn to systems that are honest about their limits.
                Interfaces that don't punish users for existing. Tools built
                with the assumption that the person on the other end deserves
                consideration.
              </p>
              <p>
                This site runs on React. Hubert is CSS. Ember-2 is something
                I'm building because I think local-first, human-centered AI is
                worth doing even when it's harder than the alternative.
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
