import React, { useState } from 'react';
// import { NavButton } from '../components/NavButton';
import { Nav } from '../components/Nav';
import '../pageStyles/menuStyle.css';

export const Menu = () => {
    const [menuState, setMenuState] = useState(false);

    const navButtonClick = (e) => {
        e.preventDefault();
        setMenuState(!menuState)
    };

    return (
        <section id='menu'>
            { menuState ? <Nav /> : null}
                
            <div className='nav-button' onClick={ navButtonClick }>
                <span className='top'></span>
                <span className='middle'></span>
                <span className='bottom'></span>
            </div>
        </section>
    );
};