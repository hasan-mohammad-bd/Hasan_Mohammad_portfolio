import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const MyProject = () => {
    const [projects, setProjects] = useState([])
    console.log(projects);

    useEffect(()=>{
        fetch('http://localhost:5000/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    
    return (
        <div className='container mx-auto'>
           <h2 className='text-center my-3 font-samibold text-5xl'>My Projects</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                projects.map(project => <ProjectDetails project={project} key={project._id}></ProjectDetails>)
            }
           </div>
        </div>
    );
};

export default MyProject;