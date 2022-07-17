import React, { Suspense } from 'react';
import Line from '../Line';
import ShowCase from './ShowCase';
import Drower from '../Drower';
import Skills from './Skills';
const LazyProject = React.lazy(() => import('./MyProject'));
const LazyContact = React.lazy(()=> import('./Contact'));


const Home = () => {
    return (
        <div className="relative">
            <Drower></Drower>
            <ShowCase></ShowCase>
            <Skills></Skills>
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject/>
            <Line></Line>
            <LazyContact/>
            </Suspense>

        </div>
    );
};

export default Home;