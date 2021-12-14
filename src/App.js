import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jumbo from "./components/Jumbo";

export default function App() {
  return (
    <>
      <Navbar />
      <Jumbo />
      <Container>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
}
