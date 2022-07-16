
import React, { Suspense } from "react";
import skills from "../../img/skillSetFinal.png";
import Loading from "../Loading";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Skills = () => {
  return (
    <div id="skill" className="flex flex-col md:flex-row items-center justify-between container mx-auto">
      <div className="spline-container relative z-[5]">
      <div className="md:h-[800px] md:w-[700px] flex justify-center items-center absolute z-[30]">
          <div className=""><Loading></Loading></div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
      <Spline
        className="spline relative z-40"
        scene="https://prod.spline.design/ZRTdbXoRvgnlFxoW/scene.splinecode"
      />
      </Suspense>
      </div>

      <div className="img-holder mr-5 md:max-w-[550px]">
        <img className="w-100" src={skills} alt="" />
      </div>
    </div>
  );
};

export default Skills;
