import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Price} from "./CalcFunction"



export default function MainInfoCard(props) {
  const [price , setPrice] =useState(Number);
  const [startTime, setStartTime] = useState(Number);
  const [status,setStatus] =useState(false);
 
  return (  
          <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{"XY"+props.station_data +10}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
             Price class: {props.Type} ,see info
          </Card.Subtitle>
          <Card.Text> Info: {props.description}</Card.Text>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button value={props.Type}
                disabled= {status} 
                onClick={(e) =>{ 
                setPrice(e.target.value);
                setStartTime(Date.now());
                setStatus(true)
                }}
                variant="success">Start</Button>
              <Button onClick={()=>{
                Price(price,startTime);
                setStatus(false)
                }} variant="danger">Stop</Button>
            </ButtonGroup>
          </div>
          <div>Here be the Counting price?</div>
        </Card.Body>
      </Card>
  );
};


