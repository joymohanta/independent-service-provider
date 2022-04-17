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
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/vqq2VyT/pictwo.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/jTbZB89/need.jpg"}
            alt="Third slide"
          />
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
