import React from 'react';

import arrowRight from './../../images/arrowRight.png';

const ContactUsSection = () => (
    <div className='contactUsSection section'>
        <div>
            <p>Let’s stay in touch</p>
            <div className='inputDiv'>
                <input placeholder='email'/>
                <img className='inputArrow' src={arrowRight} />
            </div>
        </div>
    </div>
);

export default ContactUsSection;