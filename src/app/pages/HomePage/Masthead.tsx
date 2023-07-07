import * as React from 'react';
import styled from 'styled-components/macro';
// import { Logos } from '../../components/NavBar/assets/header-img.jpeg';
import { Title } from './components/Title';

export function Masthead() {
  return (
    <Wrapper>
      {/* <Logos /> */}
      <img
        src={require('../../components/NavBar/assets/header-img.jpeg')}
        alt="header"
        className="hover-zoom"
      />
      <Title>Welcome to Cali Camp Toronto</Title>
      {/* <Lead>
        Now you can use the{' '}
        <A
          href="https://www.reactboilerplate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Boilerplate
        </A>{' '}
        as a{' '}
        <A
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </A>{' '}
        template.
      </Lead> */}
      <MainText>
        We are a Toronto based sports camp ran by 2 high school graduates with
        the goal of creating a personalized sporting experience for kids from
        ages 9-14. We have been running this camp for the past 3 summers so we
        are by no means short on experience.
      </MainText>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  img {
    height: 460px;
    width: 600px;
  }
  img.hover-zoom {
    transition: all 0.3s ease 0s;
  }
  img.hover-zoom:hover {
    transform: scale(1.1);
  }
`;

export const MainText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: black;
  margin: 0 0 1.5rem 0;

  strong {
    color: ${p => p.theme.text};
  }
`;
