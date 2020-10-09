import React, { Component, useState } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import LogIn from './components/LogIn';
import InfoCardList from './components/InfoCardList'
import Stations from './components/Stations';
import axios from 'axios'

class App extends Component {
    constructor(props)
    {
      super(props);
          this.state = {
          items: [],
      };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/items')
        .then(res => {
            this.setState({ items: res.data });
        });
      }
      checkMount(){
      this.setState({items:!this.state.items,}, function () {
        this.props.updateItem(this.state);
      }.bind(this));
      }
  render () {
    /*const [testi, setTest] = useState({items})
    {testi.map((testi) => {
      return (
      console.log(testi = {testi}) 
      )}) 
  }*/
    return(
      <div>
        <div>
          <ul>
            {this.state.items.map(item => (
              <li key={item.station_data}>{item}</li>
            ))}
          </ul>
          {/* <Stations /> */}
          <div>
            <InfoCardList />
          </div>
          <div>
            <LogIn></LogIn>
          </div>
        </div>
        <Map google={this.props.google} zoom={14}>
  
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    </div> 
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyCMqc8MsAIPHk83Y_ED7jQDCR0179SMROc",
})(App);
