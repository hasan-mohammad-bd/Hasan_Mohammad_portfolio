import Spline from "@splinetool/react-spline";
import React from "react";

const ShowCase = () => {
  return (
    <div className="show-case text-white flex flex-col-reverse md:flex-row justify-between container mx-auto">
      <div className="w-100 h-screen flex items-center md:w-[550px] justify-center z-10">
        <div className="">
          <h6 className="hello md:text-[60px] text-3xl text-[#ffe600] static mr-[100px]">
            Hello,
          </h6>
          <h6 className="text-white hasan text-5xl md:text-[90px] mt-6 md:mt-12 md:w-[550px]">
            I am Hasan.
          </h6>
          <h6 className="full-stack md:text-[32px] text-3xl text-[#59c378] mt-3 md:mt-8">
            A Full-Stack Web Developer
          </h6>
          <h6 className="text-white text-xl text-left">
            A motivated individual with in-depth knowledge of full-stack web development
            tools and technology.
          </h6>
        </div>
      </div>
      <div className="spline-container">
        <Spline
          className="spline1 w-100"
          scene="https://prod.spline.design/GigmP5SlMGNsav1a/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default ShowCase;
