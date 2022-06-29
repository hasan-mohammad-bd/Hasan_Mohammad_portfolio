import React from 'react';
import Body from './Body';




import ShowCase from './ShowCase';


const Home = () => {
    return (
        <div className="">
            <ShowCase></ShowCase>
            <Body></Body>
            <hr className='py-10 w-4/5 mx-auto' />
            <h2 className='text-center my-3 md:mt-[150px] font-samibold text-5xl'>Contact</h2>
            {/* <Contact></Contact> */}

        </div>
    );
};

export default Home;