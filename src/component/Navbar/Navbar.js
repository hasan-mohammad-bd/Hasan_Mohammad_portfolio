import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-red-400'>
            <div className='container mx-auto py-3'>
                <div className="flex justify-between">
                    <div className="logo-holder"><img src="" alt="" /><h3 className='text-3xl font-bold'>Hasan</h3></div>
                    <div>
                        <h2 className='text-3xl font-bold'>Menu</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;