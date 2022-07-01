import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProjectDetails = ({project}) => {
    console.log(project);

    const {name, img, technology, Description, _id} = project;
    return (
        <div className='rounded-project pt-5 text-center card box-border'>
            <img className='w-100' src={img} alt="" />
            <h2 className='text-md py-3'>{name}</h2>
            <p className='pb-2'>Description: {Description}</p>

        </div>
    );
};

export default ProjectDetails;