import React from "react";

import { Card, Button } from "react-bootstrap";

export default function CardComponent() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>This is a Card Title</Card.Title>
        <Card.Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            soluta rerum illum, dignissimos ex ipsum repellendus voluptatum?
            Consequatur adipisci suscipit, cum necessitatibus quis porro rerum,
            provident eligendi quisquam voluptatum numquam?
          </p>
        </Card.Text>
        <Button variant="success">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
}
