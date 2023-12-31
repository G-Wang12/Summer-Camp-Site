import * as React from 'react';
import styled from 'styled-components';

export function Footer() {
  return (
    <>
      <BlackSection>
        <Text>Thank you for visiting Camp Cali!</Text>
      </BlackSection>
    </>
  );
}

const BlackSection = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Text = styled.h2`
  margin-right: 100px;
  color: white;
  width: 100%;
`;
