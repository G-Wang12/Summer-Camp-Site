/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { Lead } from '../components/Lead';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';
import { A } from 'app/components/A';
import { GithubRepoForm } from './GithubRepoForm';
import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { ReactComponent as TSLogo } from './assets/ts.svg';
import { ReactComponent as RouteIcon } from './assets/route.svg';
import { ReactComponent as SEOIcon } from './assets/seo.svg';
import { ReactComponent as InstantFeedbackIcon } from './assets/instant-feedback.svg';
import { ReactComponent as ScaffoldingIcon } from './assets/scaffolding.svg';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'app/components/Link';
import { messages } from '../messages';
// import { IMG} from './assets/calixto-image.jpg'

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <Title as="h2">About Us</Title>
      {/* <Lead>
        Crafted for <strong>highly scalable</strong>,{' '}
        <strong>easily maintainable</strong> and{' '}
        <strong>highly performant</strong> React.js applications with a focus on{' '}
        <strong>best DX</strong> and <strong>best practices</strong>.
      </Lead> */}
      <List>
        <Person>
          <HeadPic1 src={require('./assets/calixto-image.jpg')} />
          <Content>
            <SubTitle>Calixto Rodriguez</SubTitle>
            <P>
              Hi! My name is Calixto, I'm a 17-year-old grade 12 graduate from
              North Toronto Collegiate Institute and am about to attend The
              University of Waterloo for Chemical engineering. I have played
              competitive soccer and gymnastics for over 10 years and have
              experience with other sports including basketball, track, and
              volleyball. I also have plenty of experience leading and coaching,
              including volunteering as a C.I.T. at Just Bounce Trampoline Club
              and, as an assistant coach for North York Academy, and of course
              the 3 years that I have previously run this camp. Finally, I am
              also a National level trampoline athlete competing for Just Bounce
              Trampoline Club.
            </P>
          </Content>
        </Person>
        <Person>
          <HeadPic2 src={require('./assets/gordon-image.jpg')} />
          <Content>
            <SubTitle>Gordon Wang</SubTitle>
            <P>
              Hi! My name is Gordon and I'm a grade 12 graduate from North
              Toronto C.I. heading to the University of Waterloo for their
              Computing and Financial Management program. I'm a huge
              sportsperson who loves playing soccer, basketball, and football. I
              have lots of leadership experience through my involvement with my
              high school's Student Council and different the clubs there. I was
              on North Toronto's Executive Student Council for 3 years with my
              last year being the President. I also have lots of knowledge in
              computing. I'm fluent in multiple programming languages and have
              experience working in web development.
            </P>
          </Content>
        </Person>
        <SubTitle>Our Mission</SubTitle>
        <MissionBackground>
          <MissionText>
            Camp Cali was created during the summer of 2020 as a way to return
            children to physical activity allowing them and their parents to lead
            a healthier lifestyle during the pandemic. Now, more than 4 years
            later, Camp Cali is still the fun, educational, multi-sport camp it
            started off as, however, with 4 more years of experience. Our mission
            as a camp is to teach kids the fundamentals of different sports and
            the importance of active living while simultaneously having lots of
            fun along the way. Our camp also prides itself to be able to cater to
            all aspiring young athletes whether they play sports recreationally or
            if they wish to take their athletic performance to the next level.
          </MissionText>
          <MissionIMG src={require('./assets/mission-background.jpg')}/>
          
        </MissionBackground>
          
        
        

        {/* <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>Predictable State</SubTitle>
            <P>
              Build easy to test and debug, flexible and extensible applications
              using{' '}
              <A
                href="https://redux.js.org/basics/usage-with-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </A>
              . Unidirectional data flow allows for change logging and time
              travel debugging.{' '}
              <A
                href="https://github.com/zalmoxisus/redux-devtools-extension"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Chrome Redux Dev Tools
              </A>{' '}
              to see how your application's state changes and travel in time to
              debug. Type any github username below and see it in action with
              Redux Dev Tools.
            </P>
            <GithubRepoForm />
          </Content>
        </Feature>
        <Feature>
          <CSSIcon className="feature-icon" />
          <Content>
            <SubTitle>Next Generation CSS</SubTitle>
            <P>
              Write composable CSS that’s co-located with your components for
              complete modularity. Ship only the styles that are on the page for
              the best performance. Generate application-wide styles and themes
              for your components. Change the theme below to see how easy and
              intuitive theming can ever be!
            </P>
            <ThemeSwitch />
          </Content>
        </Feature>
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(messages.i18nTitle())} </SubTitle>
            <P>
              {t(messages.i18nDescription())}
              <br />
              <small>
                (Only some of the features below are translated to demonstrate
                an example)
              </small>
            </P>
            <LanguageSwitch />
          </Content>
        </Feature>
        <Feature>
          <RouteIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(...messages.routingTitle())}</SubTitle>
            <P>
              {t(messages.routingDescription())}
              <br />
              <small>
                Go to our{' '}
                <Link to={process.env.PUBLIC_URL + '/notfound'}>/NotFound</Link>{' '}
                page to see how routing works
              </small>
            </P>
          </Content>
        </Feature>
        <Feature>
          <InstantFeedbackIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(messages.feedbackTitle())}</SubTitle>
            <P>{t(messages.feedbackDescription())}</P>
          </Content>
        </Feature>
        <Feature>
          <ScaffoldingIcon className="feature-icon" />
          <Content>
            <SubTitle>{t(messages.scaffoldingTitle())}</SubTitle>
            <P>{t(messages.scaffoldingDescription())}</P>
          </Content>
        </Feature>
        <Feature>
          <SEOIcon className="feature-icon" />
          <Content>
            <SubTitle>SEO</SubTitle>
            <P>
              Supports SEO (document head tags management) for search engines
              that support indexing of JavaScript content.
            </P>
          </Content>
        </Feature>
        <Feature>
          <TSLogo className="feature-icon" />
          <Content>
            <SubTitle>TypeScript</SubTitle>
            <P>
              Typescript is the key to scalability. Build self-documented code,
              easy-to-debug code and create maintainable large applications and
              codebases with a highly productive development experience.
            </P>
          </Content>
        </Feature>
        <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>Static Code Analysis</SubTitle>
            <P>
              Focus on writing new features without worrying about formatting or
              code quality. With the right editor setup, your code will
              automatically be formatted and linted as you work.
            </P>
          </Content>
        </Feature> */}
      </List>
    </>
  );
}

const Person = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const HeadPic1 = styled.img`
  width: 130px;
  height: 220px;
  margin-right: 2.25rem;
  flex-shrink: 0;
`;

const HeadPic2 = styled.img`
  width: 180px;
  height: 220px;
  margin-right: 2.25rem;
  flex-shrink: 0;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;

const MissionText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0.625rem 0 1.5rem 0;
  // height: 300px;
  width: 550px;
`;

const MissionIMG = styled.img`
  height: 300px;
  width: 400px;
  margin-top: 10px;
  margin-left: 10px;
  // position: flex;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // left: 0;
`;

const MissionBackground = styled.div`
  // position: relative;
  width: 960px;
  display: flex;
  // padding: 10px
  // overflow: hidden;
`;