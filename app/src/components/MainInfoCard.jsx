import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function MainInfoCard(props) {
  return (  
          <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>ID{props.station_data}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Type = price {props.Type}
          </Card.Subtitle>
          <Card.Text> {props.description}</Card.Text>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="success">Start</Button>
              <Button variant="danger">Stop</Button>
            </ButtonGroup>
          </div>
          <div>Here be the Counting price?</div>
        </Card.Body>
      </Card>
  );
};


