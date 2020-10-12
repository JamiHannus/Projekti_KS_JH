import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading :true,
    };
  }
  
 async componentDidMount() {
   const response = await axios.get("http://localhost:4000/items");
    const json = response;
    this.setState({data: json});
    console.log(this.state.data);
  }  
  

 
  render() {
    return (
      <div>
        <div>
          <div>
          </div>
          <div>
            <InfoCardList dataFromParent={this.state.data}/>
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
