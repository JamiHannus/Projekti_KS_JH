import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const MainInfoCard = ({ testcard }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>ID{testcard.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Type = price {testcard.type}
          </Card.Subtitle>
          <Card.Text> {testcard.desc}</Card.Text>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="success">Start</Button>
              <Button variant="danger">Stop</Button>
            </ButtonGroup>
          </div>
          <div>Here be the Counting price?</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainInfoCard;
