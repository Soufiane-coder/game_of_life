import React from 'react';
import Titre from '../Titre/Titre';
import './Header.scss';


const Header = () => {
    return (
        <div className='header' >
            <div className='header__background-white' />
            <div className='header__triangle-white header__triangle-up-right' />
            <div className='header__triangle-white header__triangle-buttom-left' />
            <Titre />
        </div>
    )
}



export default Header;