import Spline from "@splinetool/react-spline";
import React from "react";



const ShowCase = () => {
  return (
    <div className="show-case flex">
      <div>
        <h1>I'm a professional web developer </h1>
      </div>

        <div className="spline-container">
        <Spline scene="https://prod.spline.design/GigmP5SlMGNsav1a/scene.splinecode" />
        </div>

    </div>
  );
};

export default ShowCase;
