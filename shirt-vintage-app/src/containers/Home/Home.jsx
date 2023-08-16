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
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ford} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={val1991} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={liv1960} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </Col>
      </Row>
   
    </Container>
  );
}

export default IndividualIntervalsExample;

