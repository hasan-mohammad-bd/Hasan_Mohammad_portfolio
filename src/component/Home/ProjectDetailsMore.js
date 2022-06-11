import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsMore = () => {
    const {id} = useParams()
    const [project, setProject] = useState({});
    console.log(project);
    useEffect(()=>{
        fetch(`http://localhost:5000/project/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))

    },[])

    const {name, img, technology, Description, _id, liveLink, serverLink, clientLink} = project;
    return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img className='md:w-2/4' src={img}/>
    <div>
      <h1 class="text-2xl font-bold">{name}</h1>
      <p class="py-6"><span className='font-bold'>Technology Used: </span>{technology}</p>
      <p class="py-6"><span className='font-bold'>Description: </span>{Description}</p>

      <div className='gird grid-cols-3 gap-8 '>
      <button class="btn btn-primary"><a href={liveLink}>Live Link</a></button>
      <button class="btn btn-primary ml-5"><a href={serverLink}>Client Side Code</a></button>
      <button class="btn btn-primary ml-5"><a href={clientLink}>Server Side Code</a></button>

      </div>
    </div>
  </div>
</div>
    );
};

export default ProjectDetailsMore;