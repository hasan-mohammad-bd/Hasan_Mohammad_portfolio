import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/hasan-logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className='container mx-auto py-3'>
                <div className="flex justify-between items-center">
                    <div className='nav'>
                        <Link to='/home'>Home</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                        <Link to='/portfolio'>Skils</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                    </div>
                    <div className="logo-holder w-[120px]"><img src={logo} alt="" /></div>
                    <div>
                       <button className='btn'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;