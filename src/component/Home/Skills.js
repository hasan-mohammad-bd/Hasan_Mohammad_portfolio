import Spline from "@splinetool/react-spline";
import React from "react";
import skills from "../../img/skillSetFinal.png";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
      <Spline
        className="spline"
        scene="https://prod.spline.design/ZRTdbXoRvgnlFxoW/scene.splinecode"
      />
      <div className="img-holder mr-5">
        <img className="w-100" src={skills} alt="" />
      </div>
    </div>
  );
};

export default Skills;
