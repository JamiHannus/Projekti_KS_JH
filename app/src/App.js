
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";
import axios from 'axios'
import Stations from './components/Stations';
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
            <LogIn />
          </div>
          <div>
            <MapContainer />
          </div>
        </div>
      </div>

    );
  }
}
export default App;

