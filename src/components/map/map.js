import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import { compose, withProps } from "recompose";

import LocationIcon from "../../images/location.svg";
import React from "react";
import mapStyles from "./mapStyles";

const defaultMapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  styles: mapStyles
};

export const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFVL7C_KnkP9Yfszass-CWzse_daGTU3w&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    styles: mapStyles
  }),
  withScriptjs,
  withGoogleMap
)(({latitude, longitude}) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: latitude, lng: longitude }}
    defaultOptions={defaultMapOptions}>
      <Marker
        position={{ lat: latitude, lng: longitude }}
        icon={{ url: LocationIcon }}
        />
  </GoogleMap>
))
