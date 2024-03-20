import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1350px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 700px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;f
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) => active && `background: ${theme.primary + 20};`}

  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id='project'>
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Description>

        <ToggleGroup>
          {toggle === 'all' ? (
            <ToggleButton active value='all' onClick={() => setToggle('all')}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle('all')}>ALL</ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'android app' ? (
            <ToggleButton active onClick={() => setToggle('android app')}>
              ANDROID APP'S
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle('android app')}>
              ANDROID APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'machine learning' ? (
            <ToggleButton active onClick={() => setToggle('machine learning')}>
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle('machine learning')}>
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
