import React from "react";

const TechnologyWeb = ({ technology }) => {
  console.log(technology);
  const { name, img } = technology;
  return (
    <div className="py-10 border">
      <div className="text-center w-2/4 mx-auto flex justify-center items-center">
        <img className="w-100" src={img} alt="" />
      </div>
      <h2 className="text-center">{name}</h2>
    </div>
  );
};

export default TechnologyWeb;
