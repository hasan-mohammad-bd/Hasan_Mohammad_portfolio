import React from 'react';
import Bio from '../Bio';
import Banner from './Banner';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bio></Bio>
            <hr className='py-10 w-4/5 mx-auto' />
            <Skill></Skill>
        </div>
    );
};

export default Home;