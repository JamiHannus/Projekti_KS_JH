
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";
import axios from 'axios';
import Stations from './components/Stations';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
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
      <Container fluid ={true}>
        <Row>
            <Col><LogIn /></Col>
        </Row>
        <Row noGutters ={true}	>
          <Col xs = "auto" className="testCol"> 
             <InfoCardList items={items}/>
          </Col >
       <Col xs={13}>  <MapContainer /></Col>  
        </Row>
        <Row> <Col>profile here?</Col></Row>
      </Container>
      </>
    return(
      <>
       {output}
      </>
    )
  }
