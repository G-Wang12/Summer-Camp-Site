import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { A } from 'app/components/A';

export function Registration() {
  return (
    <>
      <Title>Registration</Title>
      <P>
        Please send an email to{' '}
        <A href="mailto:caliathletico@gmail.com">caliathletico@gmail.com</A> or
        text 416-787-9264 to start your registration. We aim to reply within 24
        hours.
      </P>
    </>
  );
}

const Link = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
