import React from 'react';
import AboutSection from './AboutSection';
import AffordableSection from './AffordableSection';
import PaymentSection from './PaymentSection';
import OurCultureSection from './OurCultureSection';
import AdvantagesSection from './AdvantagesSection';
import ContactUsSection from './ContactUsSection'


const Content = () => (
    <div className='content'>
        <AboutSection />
        <AffordableSection />
        <PaymentSection />
        <OurCultureSection />
        <AdvantagesSection />
        <ContactUsSection />
    </div>
)

export default Content;