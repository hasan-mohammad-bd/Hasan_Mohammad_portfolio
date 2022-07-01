import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectNew from './ProjectNew';

const MyProject = () => {
    const [projects, setProjects] = useState([])
    console.log(projects);

    useEffect(()=>{
        fetch('https://radiant-lake-65921.herokuapp.com/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    
    return (
        <div id='project' className='h-screen mx-auto'>
           <h2 className='text-center my-3 font-samibold text-5xl'>My Projects</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                projects.map(project => <ProjectNew project={project} key={project._id}></ProjectNew>)
            }
           </div>
        </div>
    );
};

export default MyProject;