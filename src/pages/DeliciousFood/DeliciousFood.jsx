/*eslint-disable no-unused-vars */
import React from "react";
import './DeliciousFood.css';
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const DeliciousFood = () => {
  return (
    <div className="mt-4 text-center">
      <h1>More New Recipe</h1>
      <h4>A large selection of dishes for cocking</h4>
      <div>
        <Container>

          <Row xs={1} md={4} className=" text-center ">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col key={idx}>
                <Card>

                  <Card.Img variant="top" src="https://i.ibb.co/yNkcBq4/images.jpg" />

                  <Card.Title>Brackfast</Card.Title>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://i.ibb.co/QpMhjK1/download-1.jpg" />

                  <Card.Title>Launch</Card.Title>
                </Card>

                <Card>
                  <Card.Img variant="top" src="https://i.ibb.co/t8jvLxy/download-2.jpg" />

                  <Card.Title>Dinner</Card.Title>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://i.ibb.co/37h5KW6/category2.jpg" />

                  <Card.Title>Drinks</Card.Title>
                </Card>

              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DeliciousFood;
