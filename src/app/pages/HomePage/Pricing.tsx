import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { SubTitle } from './components/SubTitle';

var weeks:string[];
weeks = [
    "Week 1: July 4 – July 7 ",
    "Week 2: July 10 – July 14",
    "Week 3: July 17 – July 21",
    "Week 4: July 24 – July 28",
    "***more weeks possible depending on demand"
]
export function Pricing() {
    return (
        <>
        <Title>Pricing</Title>
        <Content>
            <P>Here at Cali Camp, we offer affordable pricing to families so we can make a positive impact on as many kids as possible</P>
            <RegistrationWrapper>
                <InsideWrapper>
                    <SubTitle>Registration Fees</SubTitle>  
                    <Text>Full day: $250 per week</Text>
                    <P>***Registration still currently open</P>
                </InsideWrapper>
                <InsideWrapper>
                    <SubTitle>Weeks Available</SubTitle>  
                    {weeks.map((week) => (
                        <Text>{week}</Text>
                    ))}
                </InsideWrapper>
                <InsideWrapper>
                    <SubTitle>Refund Policy</SubTitle>  
                    <Text>We allow full refunds 3 days before the start of camp week</Text>
                </InsideWrapper>
            </RegistrationWrapper>
            
        </Content>
        </>
    )
}

const Content = styled.div`
    display: flex;
    margin: 2rem 0 0 0;
    flex-direction: column;
`;

const RegistrationWrapper = styled.div`
    display: flex;
`;

const InsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    width: 300px;
`;

const Text = styled.div`
    font-size: 1rem;
    line-height: 1rem;
    color: ${p => p.theme.textSecondary};
    font-weight: bold;
    margin: 10px 0 10px 0;
`;