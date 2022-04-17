import React from "react";
import { Link } from "react-router-dom";
import "./ServiceReview.css";

const ServiceReview = (props) => {
  const { name, review, img, price } = props.service;
  return (
    <div className="per-card">
      <img src={img} alt="" />
      <h4> {name} </h4>
      <p> {review} </p>
      <p>Price : {price}</p>
      <Link className="card-button" to="/checkout">
        <span>Explore Details</span>
      </Link>
    </div>
  );
};

export default ServiceReview;
