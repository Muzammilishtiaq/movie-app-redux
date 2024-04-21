import React from 'react';
import './Header.scss';
import {BiUserCircle} from 'react-icons/bi'

const Header = () => {
    return (
        <div className='header'>
    <div className='logo'>Movie App</div>
    <div className='user-image'>
        <BiUserCircle className='user-icon' title='user'/>
    </div>
        </div>
    );
};

export default Header;