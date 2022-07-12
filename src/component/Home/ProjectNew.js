import React from "react";

const ProjectNew = ({ project }) => {
  const { name, img, technology, Description, _id } = project;
  return (
    <div>
      <div class="wrapper">
        <div class="container1" id="c0">
          <div class="image" id="i0">
            <div class="city">
              <img className="w-100" src={img} alt="" />
            </div>
          </div>
          <div class="story" id="s0">
            <div class="info">
              <h3>{name}</h3>
              <p>{Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNew;
