import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="personal-info">
      <img src="https://i.ibb.co/CtSr3j5/formal-pic.jpg" alt="" />
      <h2 className="pt-3">Joy Mohanta</h2>
      <p>I try to use sense of humor to inspect my defence mechanism</p>
      <div className="goal-info">
        <div>
          <h2>About My Personal</h2>
          <div className="underline1"></div>
          <p className="paragraph">
            My first goal is to be a full stack web developer. Though I am not
            still near of this expectation, I am trying hard to reach my
            destination. The way of this goal is not easy I know it clear. But I
            will fight for it untill I reach there.
          </p>
        </div>
        <div>
          <h2>About My Service Info</h2>
          <div className="underline2"></div>
          <p className="paragraph">
            I try to fill people's skin related surgery expectation with proper
            way. As if, nobody thik about it as a non-effected surgery. Every
            surgery has positive and negative side effect. But I think I will
            try to make it successful way even after the surgery. Because, if my
            client's feel happy I feel happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
