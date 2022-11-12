import React from 'react';
import { Button } from '@react95/core';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-bottom: 10px;
`;

function Resume({ content }) {
  const { workExperience, resumeLink } = content;

  return (
    <div>
      <h2>Work Experience</h2>
      <StyledLink href={resumeLink} target='_blank' download>
        <Button style={{ fontSize: '14px' }} className="pointer">
          Download Resume
        </Button>
      </StyledLink>
      {workExperience.map((exp, idx) => (
        <div key={idx}>
          <p>
            <b>{exp.jobTitle}</b> | {exp.company} | {exp.location}
          </p>
          <p>{exp.period}</p>
          <ul>
            {exp.accomplishments.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
          <br />
        </div>
      ))}
     
      
    </div>
  );
}

export default Resume;
