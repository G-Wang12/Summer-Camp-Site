import * as React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title';
import { P } from './components/P';
import { SubTitle } from './components/SubTitle';
import GoogleMapReact from 'google-map-react';


const defaultProps = {
    center: {
      lat: 43.7288569,
      lng: -79.4153563
    },
    zoom: 15
};

export function Location() {
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
          position: {
            lat: 43.7288569,
            lng: -79.4153563
          },
          map,
          title: 'Hello World!'
        });
      }
    return (
        <>
            <Title>Our Location</Title>
            <P>The main location for Cali Camp is John Wanless Junior Public School located around Yonge and Lawrence</P>
            <P>However, when needed, the camp is sometimes moved to Lawrence Park C.I</P>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            </MapContainer>
            
        </>
    )
}

const MapContainer = styled.div`
    height: 300px;
    width: 300px;
`;