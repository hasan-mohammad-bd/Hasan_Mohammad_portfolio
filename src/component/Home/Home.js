import React from 'react';
import Bio from '../Bio';
import Banner from './Banner';
import Contact from './Contact';
import MyProject from './MyProject';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bio></Bio>
            <hr className='py-10 w-4/5 mx-auto' />
            <Skill></Skill>
            <hr className='py-10 w-4/5 mx-auto' />
            <MyProject></MyProject>
            <h2 className='text-center my-3 md:mt-[150px] font-samibold text-5xl'>Contact</h2>
            <Contact></Contact>

        </div>
    );
};

export default Home;