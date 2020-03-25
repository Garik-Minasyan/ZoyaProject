import React from 'react';

import aboutImg from '../../images/aboutImg.png'

const texts = [
    ['Zoya is a 5 years old lady, very sensitive about her food and a fussy eater child ! Has a great passion for healthy eating, defining between unhealthy and nutrient delicious foods, she always goes for the best.'],
    ['Why avocado? Well, because it was Zoya’s first favourite solid food since she turned 6 months old.'],
    ['She believes in healthy eating and understands it should be affordable and within reach of everyone. hence we do the hard work to source the best selection of gourmet and healthy ingredients from all over the globe, so Zoya and her friends can enjoy the very best of the food world!'],
    ['Zoya’s pantry was created aiming to bring all the best brands, popular helthy foods and ease of supply under one simply and easy address.'],
];

const AboutSection = () => (
    <div className='aboutSection section'>
        <div className='aboutSectionTitle'>
            <h2>About<br/>Zoya’s</h2>
        </div>
        <div className='aboutSectionImg'>
            <img src={aboutImg} alt='name' />
        </div>
        <div className='aboutSectionText'>
            <h3>History</h3>
            <p>{texts[0]}</p>
            <p>{texts[1]}</p>
            <p>{texts[2]}</p>
            <p>{texts[3]}</p>

        </div>
    </div>
);

export default AboutSection;