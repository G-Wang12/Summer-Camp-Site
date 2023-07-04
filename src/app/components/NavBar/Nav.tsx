import * as React from 'react';
import styled from 'styled-components/macro';
// import { ReactComponent as MapIcon } from './assets/map-icon.svg';
// import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { Envelope } from '@phosphor-icons/react';
import { MapPin } from'@phosphor-icons/react'; 

export function Nav() {
  return (
    <Wrapper>
      <Item
        href="https://goo.gl/maps/C8pEuYid3ANJiyNF7"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <MapPin size={24} style={{marginRight: 5}}/>
        Location
      </Item>
      <Item
        href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <Envelope size={24} style={{marginRight: 5}}/>
        
        Contact/Registration
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
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

  // svg {
  //   width: 24px;
  //   height: 24px;
  // }
`;


