import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import colour from '../../Assets/Projects/colour-moods.png';
import portfolio from '../../Assets/Projects/portfolio.png';
import hubert from '../../Assets/Projects/hubert-octopus.png';
import ball from '../../Assets/Projects/self-care-8-ball.png';
import ember from '../../Assets/Projects/ember-2.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          A <strong className='orange'>Portfolio </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Some of my creative adventures with code.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {/* row 1: ember featured, hubert beside it */}
          <Col md={8} className='project-card'>
            <ProjectCard
              imgPath={ember}
              isBlog={false}
              title='Ember-2'
              description="Ember-2 is a local-first personal intelligence system I'm building. She remembers, reflects, and retrieves with intent, instead of just generating tokens.
              Built on Python and FastAPI with append-only memory, vector retrieval, and a constitutional review layer for response governance.
              Runs locally on your own machine with an installer for Windows, Mac, and Linux."
              link='/ember-2'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={hubert}
              isBlog={false}
              title='Hubert Octopus'
              description="I wanted an animated feature for this site built with just CSS and HTML. I found an octopus idea on CodePen and Hubert was born. He's softer and fancier than his inspiration."
            />
          </Col>

          {/* row 2: portfolio, 8 ball, colour moods */}
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title='Level-Up-Portfolio'
              description="This website has been an adventure in React.js, Bootstrap, breaking things, and using Google.
              I absolutely forked someone else's GitHub and used Node.js to install the foundation. I learn best by taking things apart
              and putting them back together again.   "
              link='https://github.com/niansahc/Level-Up-Portfolio'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ball}
              isBlog={false}
              title='Self-Care 8 Ball'
              description='This is a simple React & JavaScript project taking the concept of a magic 8 ball and putting my own spin on it.
              I wanted a way to explore with JavaScript using a tutorial that I could deconstruct and reimagine.'
              link='/self-care-8-ball'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={colour}
              isBlog={false}
              title='Colour Moods'
              description='Colour Moods is a mood-ring style React app that offers self-care suggestions based on colour palettes. Still a work in progress.'
              link='https://niansahc.github.io/colour-moods/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
