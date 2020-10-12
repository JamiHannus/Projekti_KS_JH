import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "78%",
  height: "85%",
  
};
const FINLAND_BOUNDS = {
  sw: { lat: 59.667741, lng: 20.273783 },
  ne: { lat: 70.170201, lng: 33.905926 },
};
export class MapContainer extends React.Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={12}
          style={containerStyle}
          initialCenter={{
            lat: 65.012615,
            lng: 25.471453,
          }}
          LatLngBounds={FINLAND_BOUNDS}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCMqc8MsAIPHk83Y_ED7jQDCR0179SMROc",
})(MapContainer);
