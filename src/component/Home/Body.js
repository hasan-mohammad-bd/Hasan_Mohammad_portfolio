import React from "react";
import BodyDeails from "../BodyDeails";
import Profile from "./Profile";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row body">
      <div className="profile md:w-1/4 br-15"><Profile></Profile></div>
      <div className="body md:w-3/4 ml-3 br-15 bb"><BodyDeails></BodyDeails></div>
    </div>
  );
};

export default Body;
