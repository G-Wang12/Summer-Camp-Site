import * as React from 'react';
import styled from 'styled-components/macro';
// import { Logos } from '../../components/NavBar/assets/header-img.jpeg';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      {/* <Logos /> */}
      <img src={require("../../components/NavBar/assets/header-img.jpeg")} />
      <Title>Welcome to Cali Camp</Title>
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
      <Lead>
        We are a Toronto based sports camp ran by 2 high school graduates with the goal of creating a personalized sporting experience for kids from ages 9-14. We have been running this camp for the past 4 summers so we are by no means short on experience.
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  img {
    height: 230px;
    width: 300px;
  }
`;
