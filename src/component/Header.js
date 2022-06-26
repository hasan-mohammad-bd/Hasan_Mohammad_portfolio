import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/hasan-logo2.png'

const Header = () => {
    return (
        <div>
            <div className='max-w-[800px] mx-auto bb'>
                <div className="flex items-center nav-items1">
                <div className="logo-holder"><img className='w-10' src={logo} alt="" /></div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;