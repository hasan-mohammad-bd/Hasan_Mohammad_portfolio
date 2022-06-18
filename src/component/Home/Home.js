import React from 'react';
import Body from './Body';



import MyProject from './MyProject';
import ShowCase from './ShowCase';
import Skill from './Skill';

const Home = () => {
    return (
        <div className="container mx-auto">
            <ShowCase></ShowCase>
            <Body></Body>
            <Skill></Skill>
            <hr className='py-10 w-4/5 mx-auto' />
            <h2 className='text-center my-3 md:mt-[150px] font-samibold text-5xl'>Contact</h2>
            {/* <Contact></Contact> */}

        </div>
    );
};

export default Home;