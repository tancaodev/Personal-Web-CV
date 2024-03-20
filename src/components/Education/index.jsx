import styled from 'styled-components';
import { education } from '../../data/constants';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 0px 80px 0px;

  @media (max-width: 960px) {
    padding: 0px;
  }
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

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Education = () => {
  return (
    <Container id='education'>
      <Wrapper>
        <Title>Education</Title>
        <Description>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.{' '}
        </Description>
        <TimeLineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='secondary' />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
