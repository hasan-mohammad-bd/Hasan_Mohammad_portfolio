import Spline from "@splinetool/react-spline";
import React from "react";

const ShowCase = () => {
  return (
    <div className="show-case text-white flex">
      <div className="w-100 static h-screen flex items-center w-[600px] justify-center">
        <div className="w-100">
          <h5>Hello,</h5>
          <h5 className="text-white">I am Hasan.</h5>
          <h5>A Full-Stack Developer</h5>
        </div>
      </div>
      <div className="spline-container">
        <Spline
          className=""
          scene="https://prod.spline.design/GigmP5SlMGNsav1a/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default ShowCase;
