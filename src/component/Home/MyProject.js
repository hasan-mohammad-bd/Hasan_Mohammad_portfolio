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
        <div>
           <h2 className='text-center my-3 font-samibold text-5xl'>My Advantage</h2>
           <div>
            {
                projects.map(project => <ProjectDetails project={project}></ProjectDetails>)
            }
           </div>
        </div>
    );
};

export default MyProject;