import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error">
      <img
        src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
        alt=""
      />
      <h1>404 No relevent page found !!</h1>
    </div>
  );
};

export default NotFound;
