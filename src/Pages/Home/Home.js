import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
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
    </div>
  );
};

export default Home;
