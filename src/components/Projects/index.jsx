import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
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
            <ToggleButton active value='all'>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton>ALL</ToggleButton>
          )}
          <Divider />
          <ToggleButton>WEB APP'S</ToggleButton>
          <Divider />
          <ToggleButton>ANDROID APP'S</ToggleButton>
          <Divider />
          <ToggleButton>MACHINE LEARNING</ToggleButton>
          <Divider />
        </ToggleGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;
