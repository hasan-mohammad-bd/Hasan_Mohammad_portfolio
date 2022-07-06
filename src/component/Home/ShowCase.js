import Spline from "@splinetool/react-spline";
import React from "react";

const ShowCase = () => {
  return (
    <div className="show-case flex justify-between">
      <div className="flex justify-center items-center w-100">
        <div>
          <h2>Hello,</h2>
          <h2 className="text-7xl">I am Hasan.</h2>
          <h3>MERN Stack Developer</h3>
        </div>
      </div>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/GigmP5SlMGNsav1a/scene.splinecode" />
      </div>
    </div>
  );
};

export default ShowCase;
