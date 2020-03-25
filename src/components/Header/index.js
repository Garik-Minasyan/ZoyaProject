import React from 'react';

import Logo from './Logo.js';
import MainMenu from './MainMenu.js';
import SearchBlock from './Searchblock.js';

import menuimg from './../../images/Group 4170.png';

const Header = () => {
    return (
        <div className='header'>
            <img className='menuimg' src={menuimg} />
            <Logo />
            <MainMenu />
            <SearchBlock />
        </div>
    )
}

export default Header;