import React from "react";
import BodyDeails from "../BodyDeails";
import Profile from "./Profile";

const Body = () => {
  return (
    <div className="flex body">
      <div className="profile w-1/4 border br-15"><Profile></Profile></div>
      <div className="body w-3/4 border br-15"><BodyDeails></BodyDeails></div>
    </div>
  );
};

export default Body;
