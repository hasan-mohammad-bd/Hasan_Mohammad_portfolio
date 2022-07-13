import React from 'react';
import Line from '../Line';
import Body from './Body';
import Contact from './Contact';
import MyProject from './MyProject';
import ProjectNew from './ProjectNew';
import ShowCase from './ShowCase';
import Skills from './Skills';


const Home = () => {
    return (
        <div className="">
            <ShowCase></ShowCase>
            <Skills></Skills>
            <MyProject></MyProject>
            <Line></Line>
            <Contact></Contact>

        </div>
    );
};

export default Home;