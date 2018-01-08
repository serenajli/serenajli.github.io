/* global google */
import React from 'react';
import { compose, withStateHandlers } from 'recompose';

import './index.css';
import mapStyles from '../../config/mapStyles.json';
import places from '../../config/places.json';
import data from '../../config/data.json';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const SimpleMapExampleGoogleMap = compose(
  withStateHandlers(() => ({
    places,
  }), {
    onOpen: ({ places }) => (placeIndex) => ({
      places: places.map((place, index) => {
        if(placeIndex === index) {
          return {...place, isOpen: true}
        }
        return place
      })
    }),
    onClose: ({ places }) => (placeIndex) => ({
      places: places.map((place, index) => {
        if(placeIndex === index) {
          return {...place, isOpen: false}
        }
        return place
      })
    }),
  }),
  withGoogleMap
)
(props => (
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 30, lng: 0 }}
    defaultOptions={{
      mapTypeControl: false,
      streetViewControl: false,
      styles: mapStyles
    }}
  >
    {
      places.map((place, index) => (
        <Marker
          key={index}
          position={makeMarker(place.lat, place.lng)}
          icon={{
            path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
            fillColor: '#BDDBEA',
            fillOpacity: 0.65,
            strokeColor: '#BDDBEA',
            scale: 0.5
          }}
          onMouseOver={() => props.onOpen(index)}
          onMouseOut={() => props.onClose(index)}
        >
          {
            props.places[index].isOpen &&
            <InfoWindow
              onCloseClick={() => props.onClose(index)}
            >
              <div>{`${place.city}, ${place.country}`}</div>
            </InfoWindow>
          }
        </Marker>
      ))
    }
  </GoogleMap>
));

const Travel = () => (
  <div className="container">
    <div>
      { data.travel.text }
    </div>
    <SimpleMapExampleGoogleMap
      containerElement={
        <div className="map-container" />
      }
      mapElement={
        <div className="map-element" />
      }
    />
  </div>
);

const makeMarker = (lat, lng) =>
  new google.maps.LatLng(lat, lng);

export default Travel;