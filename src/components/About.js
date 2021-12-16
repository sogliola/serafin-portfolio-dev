import React from "react";

import { Card } from "react-bootstrap";

export default function About() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            soluta rerum illum, dignissimos ex ipsum repellendus voluptatum?
            Consequatur adipisci suscipit, cum necessitatibus quis porro rerum,
            provident eligendi quisquam voluptatum numquam?
          </p>
        </Card.Text>
        <Button variant="success">Home</Button>
      </Card.Body>
    </Card>
  );
}
