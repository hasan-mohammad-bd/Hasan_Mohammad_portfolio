import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectNew from './ProjectNew';
import arrow3 from '../../img/Asset 2@4x.png';

const MyProject = () => {
    const [projects, setProjects] = useState([])
    console.log(projects);

    useEffect(()=>{
        fetch('https://radiant-lake-65921.herokuapp.com/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    
    return (
        <div id='project1' className='mx-auto container text-center'>
           <h2 className='my-3 text-white projectText text-5xl text-[#ffe600]'>Projects.</h2>
           <div className='w-[100px] mx-auto relative'>
           <img className='absolute left-10' src={arrow3} alt="" />
           <img className='absolute arrow-mirror top-16 right-20' src={arrow3} alt="" />
           </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                projects.map(project => <ProjectNew project={project} key={project._id}></ProjectNew>)
            }
           </div>
        </div>
    );
};

export default MyProject;