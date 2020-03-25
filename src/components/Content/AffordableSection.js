import React from 'react';

import affordableImg from '../../images/afrodabeImg.png'

const texts = [
    ['We make sure to sprout all of the nuts we use in our range of products. Sprouting is  the germination or activating of nuts and seeds.'],
    ['We trigger the sprouting process by soaking our nuts in water, apple cider vinegar and salt for 6-18 hours. Our nuts are then drained and dried at low temperatures for up to 48 hours.'],
    ['This entire process helps breakdown the phytic acid in the nuts which improves their digestibility and increases the nutrient absorption of minerals such as zinc, calcium and magnesium.'],
    ['Because this sprouting and drying process is carried out at low temperatures, it also protects the heat sensitive oil content of the nuts, preventing the oils from going rancid which is what occurs when they are roasted at high temperatures.'],
];

const AffordableSection = () => (
    <div className='affordableSection section'>
        <div className='affordableSectionText'>
            <h3>Affordable</h3>
            <p>{texts[0]}</p>
            <p>{texts[1]}</p>
            <p>{texts[2]}</p>
            <p>{texts[3]}</p>
        </div>
        <div className='AffordableSectionImg'>
            <img src={affordableImg} />
        </div>
    </div>
);

export default AffordableSection;