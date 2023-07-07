import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { AboutUs } from './AboutUs';
import { PageWrapper } from 'app/components/PageWrapper';
import { Schedule } from './Schedule';
import { Pricing } from './Pricing';
import { Registration } from './Registration';
import { Location } from './Location';
import { Footer } from './Footer';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    dataLayer: {
        userId: '001',
        userProject: 'project',
        page: 'home'
    },
    dataLayerName: 'PageDataLayer'
}

export function HomePage() {
  TagManager.dataLayer(tagManagerArgs);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Cali Camp - summer sports camp Toronto"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <AboutUs />
        <Schedule />
        <Pricing />
        <Location />
        <Registration />
      </PageWrapper>
      <Footer />
    </>
  );
}
