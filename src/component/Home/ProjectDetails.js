import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProjectDetails = ({project}) => {
    const navigate = useNavigate()
    const {name, img, technology, Description, _id} = project;
    return (
        <div className='rounded-project pt-5 text-center'>
            <img className='w-100' src={img} alt="" />
            <h2 className='text-md py-3'>{name}</h2>
            <button onClick={()=> navigate(`/${_id}`)} className='btn'>More Details</button>
        </div>
    );
};

export default ProjectDetails;