import React from 'react';

import paypal from '../../images/paypal.png'

const Footer = () => (
    <footer>
        <div className='footerBlocks'>
            <div className='footerBlock'>
                <h3>Store</h3>
                <a href='#'>Pantry</a>
                <a href='#'>Whole foods</a>
                <a href='#'>New products</a>
                <a href='#'>Best sellers</a>
            </div>
            <div className='footerBlock'>
                <h3>For customer</h3>
                <a href='#'>About us</a>
                <a href='#'>Shipping details</a>
                <a href='#'>Privacy policy</a>
                <a href='#'>Returns</a>
            </div>
            <div className='footerBlock'>
                <h3>Contact us</h3>
                <p>Phone: +61 3 6243 359</p>
                <p>Email: info@zoyaspantry.com</p>
            </div>
            <div className='footerBlock'>
                <h3>Follow us</h3>
                <a href='#'>Facebook</a>
                <a href='#'>Instagram</a>
            </div>
        </div>
        <div className='copyrights'>
            <img src={paypal} />
            <div className='texts'>
                <p>All rights reserved © 2020 zoyaspantry.com</p>
                <p>Designed and developed by CONCEPT STUDIO</p>
            </div>
        </div>
    </footer>
)
    

export default Footer;