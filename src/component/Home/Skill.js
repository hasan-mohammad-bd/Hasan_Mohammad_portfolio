import React from 'react';
import html from '../../img/Technology/html'
import css from '../../img/Technology/css'
import js from '../../img/Technology/js'
import react from '../../img/Technology/react'
import reactRouter from '../../img/Technology/react-router'
import bootstrap from '../../img/Technology/bootstrap.png'
import tailwind from '../../img/Technology/Tailwind.png'
import material from '../../img/Technology/material.png'
import node from '../../img/Technology/node.png'
import express from '../../img/Technology/express.png'
import mongodb from '../../img/Technology/mongodb.png'
import firebase from '../../img/Technology/firebase.png'
import reactQuary from '../../img/Technology/react-quary.png'
import jwt from '../../img/Technology/jwt.png'



const Skill = () => {

    const technology = [
        {name: 'HTML' , img:html},
        {name: 'CSS' , img:css},
        {name: 'JavaScript', img:js},
        {name: 'React', img:react},
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
        <div>
            <h2 className='text-center my-3 font-samibold text-5xl'>My Advantage</h2>
            
        </div>
    );
};

export default Skill;