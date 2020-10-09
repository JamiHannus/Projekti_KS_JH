import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCMqc8MsAIPHk83Y_ED7jQDCR0179SMROc",
})(MapContainer);
