import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


const containerStyle = {
  position: "relative",
  width: "78%",
  height: "85%",
  
};
var FINLAND_BOUNDS = [{lat: 59.667741, lng: 20.273783}, {lat: 70.170201, lng: 33.905926}]



export class MapContainer extends React.Component {
  shouldComponentUpdate(nextProps)
   {
    return false;
    }
  render() {{console.log(this.props.items)}
    return (
      
        <Map
          google={this.props.google}
          zoom={12}
          style={containerStyle}
          initialCenter={{
            lat: 65.012615,
            lng: 25.471453,
          }}
          //  something dosent work on bound
          // LatLngBounds={FINLAND_BOUNDS}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
           { this.props.items.map((test) =>(
             <Marker
              key= {test.station_data}
              position={{
              lat: test.lattitude,
              lng: test.longitude}} 
              />
           ))} 
        </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCMqc8MsAIPHk83Y_ED7jQDCR0179SMROc",
})(MapContainer);
