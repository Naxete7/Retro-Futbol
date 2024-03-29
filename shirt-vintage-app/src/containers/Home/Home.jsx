import React from "react";
import "./Home.scss";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ford from "../../assets/img/ford.jpg";
import liv1960 from "../../assets/img/liv1960.jpg"
import val1991 from "../../assets/img/val1991.jpg"

function IndividualIntervalsExample() {
  return (
    <Container
      fluid
      className="teamDesign d-flex flex-wrap  align-items-center justify-content-center"
    >
      <Row className="carouselDesign d-flex justify-content-center mb-5">
        <Col className="carouselDesign w-80 ">
          <Carousel className="carouselDesign d-flex justify-content-center">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 d-flex justify-item-center"
                src={ford}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2></h2>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 d-flex justify-item-center"
                src={liv1960}
                alt="Second slide"
              />
              <Carousel.Caption className="">
                <h3 className=""></h3>
                <p className="">
                 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 d-flex justify-item-center"
                src={val1991}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      
    </Container>
  );
}

export default IndividualIntervalsExample;

