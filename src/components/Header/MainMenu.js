import React from 'react';
import arrow from '../../images/arrow.png';

const MainMenu = () => {
    return (
          <nav className='mainMenu'>
              <div className='selector'>Pantry <img src={arrow} /></div>
              <div className='selector'>Whole Foods <img src={arrow} /></div>
              <div>New in</div>
              <div>Best Sellers</div>
          </nav>
        
    );
};

export default MainMenu;