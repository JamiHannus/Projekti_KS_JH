
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MapContainer from "./components/MapContainer";
import LogIn from "./components/LogIn";
import InfoCardList from "./components/InfoCardList";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

export default function App() {


    const [items, setItems] = useState([]);
// this should have some wait time?
    useEffect(() => {
        axios.get('http://localhost:4000/items')
        .then((response) => {
            setItems(response.data.items)
        });
      });
      
//this has await but will take long time
      // useEffect(() => {
      //   const fetchProducts = async () => {
      //   await axios.get('http://localhost:4000/items')
      //   .then((response) => {
      //       setItems(response.data.items)
      //   });
      // }
      // fetchProducts();}
      // );
      

// Using bootstrap rows and columns
  let output = 
      <>
      
    <Container fluid ={true}>
        <Row>
            <Col>
            {/* Here is the Login import */}
              <LogIn />
            </Col>
        </Row>
        {/* Here is the card stack */}
        <Row noGutters ={true}>
          <Col xs = "auto" className="testCol"> 
             <InfoCardList items={items}/>
          </Col >
          {/* Map starts here */}
          <Col xs={13}>
            <MapContainer  items={items} /></Col>  
        </Row>
          <Row>
             <Col>profile here?</Col>
          </Row>
    </Container>
      </>
    return(
      <>
       {output}
      </>
    )
  }
