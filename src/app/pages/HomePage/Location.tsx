import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { SubTitle } from './components/SubTitle';
import GoogleMapReact from 'google-map-react';

const defaultProps1 = {
  center: {
    lat: 43.7288569,
    lng: -79.4153563,
  },
  zoom: 15,
};

const defaultProps2 = {
  center: {
    lat: 43.7221392,
    lng: -79.4103527,
  },
  zoom: 15,
};

export function Location() {
  const renderMarkers = (map, maps, center) => {
    let marker = new maps.Marker({
      position: center,
      map,
      title: 'Hello World!',
    });
  };
  return (
    <>
      <Title>Our Location</Title>
      <P>
        The main location for Cali Camp is John Wanless Junior Public School
        located around Yonge and Lawrence
      </P>
      <P>
        However, when needed, the camp is sometimes moved to Lawrence Park C.I
      </P>
      <MapsWrapper>
        <MapContainer>
          <SubTitle>John Wanless Junior P.S</SubTitle>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={defaultProps1.center}
            defaultZoom={defaultProps1.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              renderMarkers(map, maps, defaultProps1.center)
            }
          ></GoogleMapReact>
        </MapContainer>
        <MapContainer>
          <SubTitle>Lawrence Park C.I</SubTitle>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={defaultProps2.center}
            defaultZoom={defaultProps2.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              renderMarkers(map, maps, defaultProps2.center)
            }
          ></GoogleMapReact>
        </MapContainer>
      </MapsWrapper>
    </>
  );
}

const MapContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-right: 50px;
`;

const MapsWrapper = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;
