import React from 'react';

import adv1Img from '../../images/adv1.png';
import adv2Img from '../../images/adv2.png';
import adv3Img from '../../images/adv3.png';

const adv1Title = 'Affordable Prices';
const adv2Title = 'Fresh and Healthy Products';
const adv3Title = 'Fast Delivery';


const AdvantageBlock = ({imgSrc, title}) => (
    <div className='AdvantageBlock'>
        <img src={imgSrc} />
        <h4>{title}</h4>
    </div>
);

const AdvantagesSection = () => (
    <div className='AdvantagesSection section'>
        <h2>Why<br/>Zoyas</h2>
        <AdvantageBlock title={adv1Title} imgSrc={adv1Img} />
        <AdvantageBlock title={adv2Title} imgSrc={adv2Img} />
        <AdvantageBlock title={adv3Title} imgSrc={adv3Img} />
    </div>
);

export default AdvantagesSection;