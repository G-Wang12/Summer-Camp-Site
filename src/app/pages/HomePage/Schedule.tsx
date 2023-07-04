import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { SubTitle } from './components/SubTitle';
import ReactPlayer from 'react-player'

var activities:string[];
activities = [
    "9:30 | Drop-off",
    "9:30 - 9:35 | walk to JW or Lawrence park",
    "9:35 - 10:50 | soccer playing/training",
    "10:50 - 10:55 | break/snack",
    "10:55 - 11:25 | soccer playing/training",
    "11:25 - 11:55 | team building activities",
    "11:55 - 12:00 | walk to our house",
    "12:00 - 1:15 | lunch on back deck",
    "1:15 - 1:20 | walk back to JW",
    "1:20 - 2:35 | basketball playing/training",
    "2:35 - 2:50 | break/snack",
    "2:50 - 3:30 | active games/ activities (capture the flag, jackpot, etc)",
    "3:30 | pick up at JW"
]

export function Schedule() {
    return (
        <>
        <Title as="h2">Our Schedule</Title>
        <Content>
            <P>This year's camp will run for the month of July and maybe into August if interest is shown. The programs we plan will cater to all kids who either want to work on their athletic ability or just have fun. The camp is every weekday from 9:30am to 3:30pm.</P>
            <ScheduleWrapper>
                <InsideWrapper>
                    <SubTitle>An example of a day at camp:</SubTitle>
                    {activities.map((activity) => (
                        <Text>{activity}</Text>
                    ))}
                </InsideWrapper>
                <VideoWrapper>
                    <ReactPlayer url='videos/video2.mov'  width="500" playing={true} loop={true}/>
                </VideoWrapper>
            </ScheduleWrapper>
            <SubTitle>Other sports/activities that will be covered during the week on rotation include:</SubTitle>
            <Text>- Ultimate Frisbee</Text>
            <Text>- Track and Field</Text>
            <Text>- American football</Text>
            <Text>- Other basic physical education games</Text>
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
    margin: 10px 0 10px 0;
`;

const ScheduleWrapper = styled.div`
    display: flex;
`;

const InsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem
`;