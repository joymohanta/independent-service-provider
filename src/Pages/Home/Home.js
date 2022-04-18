import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import ServiceReview from "../ServiceReview/ServiceReview";

const Home = () => {
  const [services] = useServices();
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/7KR7MbW/picthree.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="main-title">
              <h3 className="slider-title">DOCTOR | SURGICAL</h3>
              <p>
                A innovative way to surgery that makes patient satisfied and
                interested to stir
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/vqq2VyT/pictwo.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="main-title">
              <h3 className="slider-title text-primary">DOCTOR | SURGICAL</h3>
              <p className="text-primary">
                A innovative way to surgery that makes patient satisfied and
                interested to stir
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/jTbZB89/need.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="main-title">
              <h3 className="slider-title text-warning">DOCTOR | SURGICAL</h3>
              <p className="text-warning">
                A innovative way to surgery that makes patient satisfied and
                interested to stir
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="title">Service Reviews(3)</h1>
      <div className="new-card">
        {services.map((service) => (
          <ServiceReview key={service.id} service={service}></ServiceReview>
        ))}
      </div>
    </div>
  );
};

export default Home;
