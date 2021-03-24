import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgjs5rG0nMgFfaUqIr0eWbNYhGxIO-XZQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 29.347616162629823, lng: 48.040422926723956 }}
  >
    <Marker position={{ lat: 29.347616162629823, lng: 48.040422926723956 }} />
  </GoogleMap>
));

function MapContainer() {
  return (
    <div>
      <MyMapComponent></MyMapComponent>
    </div>
  );
}

export default MapContainer;
