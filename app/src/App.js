
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import Testi from "./components/testi";
import axios from 'axios';
import Stations from './components/Stations';

export default function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/items')
        .then((response) => {
            setItems(response.data.items)
        });
      });
      

  let output = 
      <>
      <div>
        <div>
          {/* <Stations /> */}
          <div>
            <Testi items={items}/>
          </div>
          <div>
           <LogIn />
          </div>
          <div>
            <MapContainer />
          </div>
        </div>
      </div>

      </>
    return(
      <>
       {output}
      </>
    )
  }
