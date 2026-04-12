import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AiFillGithub,

} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <Container fluid className='footer'>
        <Row>
          <Col md='4' className='footer-copywright'>
            <h3>Designed and Developed by M. Chastain Flournoy</h3>
          </Col>
          <Col md='4' className='footer-copywright'>
            <h3>Copyright © {year} niansahc</h3>
            <p style={{ fontSize: '0.85em', marginTop: '4px' }}>
              <Link to='/privacy' style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy</Link>
              {' · '}
              <Link to='/accessibility' style={{ color: 'rgba(255,255,255,0.6)' }}>Accessibility</Link>
            </p>
          </Col>
          <Col md='4' className='footer-body'>
            <ul className='footer-icons'>
              <li className='social-icons'>
                <a
                  href='https://github.com/niansahc'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub profile'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/mchastainflournoy/'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
