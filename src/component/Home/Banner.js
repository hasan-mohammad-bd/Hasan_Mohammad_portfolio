import React from "react";

const Banner = () => {
  return (
    <div className=" bg-red-300 ">
      <div className="flex h-screen justify-center items-center">
        <div>
          <h3 className="text-5xl font-extrabold"> Hello world!!</h3>
          <button className="btn btn-success my-5"><a target="_blank" href="https://drive.google.com/file/d/10Jsns5fVdU2KylzvMhi-W7wMLeCPo3o0/view?usp=sharing">Download Resume</a></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
