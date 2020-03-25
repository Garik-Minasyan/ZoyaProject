import React from 'react';

import givingBackImg from '../../images/givingBack.png';
import healthImg from '../../images/health.png';
import saveEarthImg from '../../images/saveEarth.png';

const givingBackTitle = 'Giving back'
const healthTitle = 'Health'
const saveEarthTitle = 'Save earth'
const givingBackText = 'We make sure to sprout all of the nuts we use in our range of products. Sprouting is the germination or activating of nuts and seeds.'
const healthText = 'We make sure to sprout all of the nuts we use in our range of products. Sprouting is the germination or activating of nuts and seeds.'
const saveEarthText = 'We make sure to sprout all of the nuts we use in our range of products. Sprouting is the germination or activating of nuts and seeds.'

const CultureBlock = ({title, imgSrc, text}) => (
    <div className='cultureBlock'>
        <img src={imgSrc} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);

const OurCultureSection = () => (
    <div className='ourCultureSection section'>
        <CultureBlock title={givingBackTitle} imgSrc={givingBackImg} text={givingBackText} />
        <CultureBlock title={healthTitle} imgSrc={healthImg} text={healthText} />
        <CultureBlock title={saveEarthTitle} imgSrc={saveEarthImg} text={saveEarthText} />
        <div className='ourCultureSectionText'>
            <h2>OUR<br/>CULTURE</h2>
        </div>
        
    </div>
)

export default OurCultureSection;