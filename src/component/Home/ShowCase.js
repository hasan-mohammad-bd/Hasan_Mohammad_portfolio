import Spline from "@splinetool/react-spline";
import React from "react";
import hasan from "../../img/hasanWeb2.png";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import arrow1 from "../../img/Asset 1.png";
import arrow2 from "../../img/Asset 3@4x.png";


const ShowCase = () => {
  return (
    <div className="show-case text-white flex flex-col-reverse md:flex-row justify-between container mx-auto">
      <div className="w-100 h-screen flex items-center md:w-[550px] md:mt-16 z-10">
        <div className="">
          <div className="flex items-center justify-start">
          <h6 className="hello md:text-[60px] text-3xl text-[#ffe600] static mr-[100px]">
            Hello,
          </h6>
          <div className="ml-[-80px] ">
            <img className="mb-[-30px]" src={arrow1} alt="" />
          </div>
          </div>
          <h6 className="text-white hasan text-5xl md:text-[90px] mt-6 md:mt-12 md:w-[550px]">
            I am Hasan.
          </h6>
          <h6 className="full-stack md:text-[32px] text-3xl text-[#59c378] mt-3 md:mt-8">
            A Full-Stack Web Developer
          </h6>
          <h6 className="text-white text-xl text-left">
            A motivated individual with in-depth knowledge of full-stack web
            development tools and technology.
          </h6>
          <div className="mt-10 flex items-center">
            <div className="img-holder w-[150px]">
              <img className="w-100 avatar" src={hasan} alt="" />
            </div>
            <div>
              <h6 className="text-4xl ml-3 mohammad">Hasan Mohammad</h6>
              <div className="mt-2 flex">
                  <a className=" text-3xl ml-3 text-white" href="https://github.com/hasan-mohammad-bd" target="_blank"><AiFillGithub className="inline-block"/></a>
                  <a className=" text-3xl text-blue-500" href="https://www.linkedin.com/in/hasan19947/" target="_blank"><AiFillLinkedin className="inline-block"/></a>
                  <a className=" text-3xl text-pink-500"  href="https://www.instagram.com/hasan_mohammad_7/" target="_blank"><AiOutlineInstagram className="inline-block" /></a>

              </div>
              
            </div>
            <div className="ml-5"><img className="flash" src={arrow2} alt="" /></div>
          </div>
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
