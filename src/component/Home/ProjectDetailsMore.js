import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsMore = () => {
    const {id} = useParams()
    const [project, setProject] = useState({});
    console.log(project);
    useEffect(()=>{
        fetch(`https://radiant-lake-65921.herokuapp.com/project/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))

    },[])

    const {name, img,img2, img3, img4, technology, Description, Description2,Description3,Description4,Description5, _id, liveLink, serverLink, clientLink} = project;
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="grid grid-cols-2 gap-5 md:w-1/2">
    <img className='w-100' src={img}/>
    <img className='w-100' src={img2}/>
    <img className='w-100' src={img3}/>
    <img className='w-100' src={img4}/>
    </div>
    <div className='md:w-[600px]'>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="py-6"><span className='font-bold'>Technology Used: </span>{technology}</p>
      <p className="py-6"><span className='font-bold'>Overview: </span></p>
      <ul className='des-list ml-5 mb-5'>
        <li>{Description}</li>
        <li>{Description2}</li>
        <li>{Description3}</li>
        <li>{Description4}</li>
        <li>{Description5}</li>
      </ul>

      <div className='gird grid-cols-3 gap-8 '>
      <button className="btn btn-primary"><a href={liveLink}>Live Link</a></button>
      <button className="btn btn-primary ml-5"><a href={serverLink}>Client Side Code</a></button>
      <button className="btn btn-primary ml-5"><a href={clientLink}>Server Side Code</a></button>

      </div>
    </div>
  </div>

</div>
    );
};

export default ProjectDetailsMore;