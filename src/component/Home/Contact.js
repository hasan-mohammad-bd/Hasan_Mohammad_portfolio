import React from 'react';
import contact from '../../img/contact4.png';

const Contact = () => {
    return (
        <div id='contact' className='form1 relative mt-20'>
            <img className="absolute z-index" src={contact} alt=""/>
            <div class="shade">
    <div class="blackboard">
        <div class="form">
            <p>
                <label>Name: </label>
                <input className="" type="text" />
            </p>
            <p>
                <label>Email: </label>
                <input type="text" />
            </p>
            <p>
                <label>Message: </label>
                <textarea className='border-b-2'></textarea>
            </p>
            <p class="wipeout">
                <input type="submit" value="Send" />
            </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default Contact;