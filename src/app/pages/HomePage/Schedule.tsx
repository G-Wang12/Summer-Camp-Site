import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { SubTitle } from './components/SubTitle';


export function Schedule() {
    return (
        <>
        <Title as="h2">Our Schedule</Title>
        <Content>
            <P>This year's camp will run for the month of July and maybe into August if interest is shown.</P>
            <SubTitle>An example of a day at camp:</SubTitle>
            <Text>9:30 | Drop-off</Text>
            <SubTitle>Other sports/activities that will be covered during the week on rotation include:</SubTitle>
            <Text>Ultimate Frisbee</Text>
            <Text>Track and Field</Text>
        </Content>
        </>
    )
}

const Content = styled.div`
    display: flex;
    margin: 2rem 0 0 0;
    flex-direction: column;
`;

const Text = styled.div`
    font-size: 1rem;
    line-height: 1rem;
    color: ${p => p.theme.textSecondary};
    margin: 10px 0 0 0;
`;