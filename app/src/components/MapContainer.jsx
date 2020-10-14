import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "78%",
  height: "85%",
  
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    test:false,
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
    test:true
  });
onMapClicked = (props) => {
  console.warn("hello");
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        test:false,
        })
    }
    else this.setState({test :false})
  };
// something renders the map too much now it only renders when clicked on it
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.test === nextState.test) {
      return false;
    } else {
      return true;
    }
  }

  
  render() {
    console.warn(this.props);
    return (
      
        <Map
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={12}
          style={containerStyle}
          initialCenter={{
            lat: 65.012615,
            lng: 25.471453,
          }}
            >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
          <Marker onClick={this.onMarkerClick} name={"test"} />
           { this.props.items.map((test) =>(
             <Marker
              onClick={this.onMarkerClick}
              key= {test.station_data}
              position={{
              lat: test.lattitude,
              lng: test.longitude}} 
              name={test.description}
              />
           ))} 
             <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCMqc8MsAIPHk83Y_ED7jQDCR0179SMROc",
})(MapContainer);
