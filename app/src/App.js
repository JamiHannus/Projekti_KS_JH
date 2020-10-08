import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <InfoCardList />
          </div>
          <div>
            <LogIn></LogIn>
          </div>
        </div>
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
})(App);
