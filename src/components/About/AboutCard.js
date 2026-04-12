import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify', paddingBottom: '1.2em' }}>
            I'm a lead Business Technology Analyst and QA practitioner with a
            full-stack background. That combination means I understand how
            software gets built, how it gets tested, and how the gap between
            those two things is where most of the real problems live.
          </p>
          <p style={{ textAlign: 'justify', paddingBottom: '1.2em' }}>
            My tech career has moved through full-stack development (frontend,
            backend, IoT applications for smart warehousing) into quality
            assurance and analysis, where the work is about asking the right
            questions before something ships rather than after.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Outside of work, I research and build independently. Ember-2 is a
            local-first personal intelligence system I'm developing from
            scratch, technically and architecturally opinionated about what
            responsible AI looks like at the personal scale.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
