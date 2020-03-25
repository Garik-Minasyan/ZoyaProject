import React from 'react';
import searchIcon from '../../images/searchIcon.png';
import favIcon from '../../images/favIcon.png';
import smileIcon from '../../images/smileIcon.png';

const SearchBlock = () => {
    return (
        <div className='searchBlock'>
            <div className='icons'>
                <img src={searchIcon} alt='name' />
                <img className='facikon' src={favIcon} alt='name' />
                <img className='smileikon' src={smileIcon} alt='name' />
            </div>
            <div className='countBlock'>
                0
            </div>
        </div>
    );
};

export  default SearchBlock;