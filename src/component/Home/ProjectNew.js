import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import {useQuery } from 'react-query';
import ProjectModal from "./ProjectModal";

const ProjectNew = ({ project, setProject2, project2 }) => {
  const [reducerValue, forceUpdate] = useReducer(x=> x+1, 0)

  // const {name, img, technology, Description, _id} = project;
  console.log(project._id);
  // fetch(`https://kithen.onrender.com.railway.app/project/${project._id}`)

  useEffect(()=>{
    fetch(`https://kithen.onrender.com/project/${project._id}`)
    .then(res => res.json())
    .then(data => setProject2(data))

  },[reducerValue]);




  return (
    <div className="text-start">
      <div class="wrapper">
        <div class="container1" id="c0">
          <div class="image" id="i0">
            <div class="city">
              <label for="projectModal" class="">
                <img
                  onClick={()=>{forceUpdate()}}
                  for="projectModal"
                  className="w-100 cursor-pointer"
                  title="click for details"
                  src={project.img}
                  alt=""
                />
              </label>
            </div>
          </div>
          <div class="story" id="s0">
            <div class="info">
              <h3>{project.name}</h3>
              <p>{project.Description}</p>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal project2={project2}></ProjectModal>

    </div>
  );
};

export default ProjectNew;
