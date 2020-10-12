import { Marker } from "google-maps-react";
import React from "react";

export default function MapMarkers(props) {
    return ( 
        <Marker
                title = {props.description}
                name = {props.station_data}
                position = {{lat:65.006361 , lng:25.520539}}/>
    );
};

