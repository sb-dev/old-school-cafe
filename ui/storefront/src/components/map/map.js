import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

import LocationIcon from "../../images/location.svg";
import React from "react";
import config from "../../config"
import mapStyles from "./mapStyles";

const defaultMapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  styles: mapStyles
};

export const Map = ({latitude, longitude}) => {
  const MapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultOptions={defaultMapOptions}
      >
        <Marker
          position={{ lat: latitude, lng: longitude }}
          icon={{ url: LocationIcon }}
        />
      </GoogleMap>
    ))
  )

  return (
    <MapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config['google-maps-api-key']}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      styles={mapStyles}
    />
  )
}
