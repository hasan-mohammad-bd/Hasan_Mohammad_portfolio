import React from 'react';

const Bio = () => {
    return (
        <div className='md:h-screen container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bio">
                    <div className="biography">
                        <h2 className='small-heading my-10'>BIOGRAPHY</h2>
                        <p className='w-[300px] text-2xl pb-10'>Work for money and web development for love, I'm Hasan, an full-stack web developer based in Bangladesh</p>
                        
                    </div>
                    <div className="biography">
                        <h2 className='small-heading my-10'>CONTACT</h2>
                        <p className='w-[300px] text-2xl pb-10'>Dhaka, Bangladesh <br /> hasan.md.east@gmail.com <br /> +880 1688861610</p>
                        
                    </div>
                    <div className="biography">
                        <h2 className='small-heading my-10 uppercase'>Service</h2>
                        <p className='w-[300px] text-2xl pb-10'>Full-stack web development <br /> Web application development<br />E-commerce Development</p>
                        
                    </div>
                </div>
                <div className="pro-img-holder border h-[800px] md:w-[500px]">
                    <div className="grey-section">
                            <h1>hello</h1>
                    </div>
                </div>
                <div className="project text-right">
                <div className="biography">
                        <h2 className='small-heading my-10 uppercase'>Years of <br /> Experience</h2>
                        <p className='w-[300px] ml-auto text-7xl pb-10'>01</p>
                        
                    </div>
                    <div className="biography">
                        <h2 className='small-heading my-10 uppercase'>Project <br /> Done</h2>
                        <p className='w-[300px] ml-auto text-7xl pb-10'>10+</p>
                        
                    </div>
                    <div className="biography">
                        <h2 className='small-heading my-10 uppercase'>Linkedin skill <br /> assessment passed</h2>
                        <p className='w-[300px] ml-auto text-7xl pb-10'>04</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;