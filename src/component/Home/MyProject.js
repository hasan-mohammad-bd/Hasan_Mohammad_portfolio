import React, { useEffect, useState, Suspense } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectNew from "./ProjectNew";
import arrow3 from "../../img/Asset 2@4x.png";
import arrow4 from "../../img/Asset 5@4x.png";
import arrow5 from "../../img/Asset 6@4x.png";
import { useQuery } from 'react-query';
import Loading from "../Loading";

const MyProject = () => {

  const [project2, setProject2] = useState([]);

  const { isLoading, error, data:projects } = useQuery('projects', () =>
  fetch('https://kithen.onrender.com/project').then(res =>
    res.json()
  )
)


if (isLoading) return <Loading></Loading>
console.log(error);

  return (
    <div id="project1" className="mx-auto container text-center mt-6">

      <div className="w-[100px] mx-auto relative">
        <img className="absolute left-10" src={arrow3} alt="" />
        <img className="absolute top-16 left-[150px]" src={arrow4} alt="" />
        <img className="absolute top-16 right-[200px]" src={arrow5} alt="" />
        <img
          className="absolute arrow-mirror top-16 right-20"
          src={arrow3}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 .span">
        {projects?.map((project) => (
          <ProjectNew
            project={project}
            key={project._id}
            project2={project2}
            setProject2={setProject2}
          ></ProjectNew>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
