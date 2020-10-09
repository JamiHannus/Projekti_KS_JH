import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Users />
          </div>
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
