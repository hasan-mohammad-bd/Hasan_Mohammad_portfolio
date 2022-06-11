import React from "react";

const Banner = () => {
  return (
    <div className="banner text-center flex justify-center items-center my-10 md:my-[200px]">
      <div className="different-font">
        <h2 className="md:text-[80px] text-3xl md:mb-10">Hasan Mohammad</h2>
        <h2 className="md:text-[80px] text-3xl md:mb-10">
          Full-Stack Web Developer
        </h2>
        <h2 className="md:text-[80px] text-3xl">Based in Bangladesh</h2>
      </div>
    </div>
  );
};

export default Banner;
