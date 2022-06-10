import React from 'react';
import html from '../../img/Technology/html.png'
import css from '../../img/Technology/css.png'
import js from '../../img/Technology/js.png'
import react from '../../img/Technology/react.png'
import reactRouter from '../../img/Technology/react-router.png'
import bootstrap from '../../img/Technology/bootstrap.png'
import tailwind from '../../img/Technology/Tailwind.png'
import material from '../../img/Technology/material.png'
import node from '../../img/Technology/node.png'
import express from '../../img/Technology/express.png'
import mongodb from '../../img/Technology/mongodb.png'
import firebase from '../../img/Technology/firebase.png'
import reactQuary from '../../img/Technology/react-quary.png'
import jwt from '../../img/Technology/jwt.png'
import TechnologyWeb from './TechnologyWeb';


const Skill = () => {

    const technologies = [
        {name: 'HTML' , img:html},
        {name: 'CSS' , img:css},
        {name: 'JavaScript', img:js},
        {name: 'React', img:react},
        {name: 'React Router', img:reactRouter},
        {name: 'Bootstrap', img:bootstrap},
        {name: 'Tailwind', img:tailwind},
        {name: 'Meterial UI', img:material},
        {name: 'Node', img:node},
        {name: 'express', img:express},
        {name: 'MongoDB', img:mongodb},
        {name: 'Firebase', img:firebase},
        {name: 'React Query', img:reactQuary},
        {name: 'JWT Token', img:jwt},
    ]
    return (
        <div className=''>
            <h2 className='text-center my-3 font-samibold text-5xl'>My Advantage</h2>
            <div className='grid grid-cols-2 md:grid-cols-7 gap-3 mt-8'>
            {
                technologies.map(technology => <TechnologyWeb technology={technology}></TechnologyWeb>)
            }
            </div>
        </div>
    );
};

export default Skill;