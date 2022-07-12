import React from 'react';
import Line from '../Line';
import Body from './Body';
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


            <h2 className='text-center my-3 md:mt-[150px] font-samibold text-5xl'>Contact</h2>
            {/* <Contact></Contact> */}

        </div>
    );
};

export default Home;