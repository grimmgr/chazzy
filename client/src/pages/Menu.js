import React, { useState } from 'react';
import { NavButton } from '../components/NavButton/NavButton.js';
import { Nav } from '../components/Nav/Nav.js';

export const Menu = () => {
    const [menuState, setMenuState] = useState(false);

    const navButtonClick = (e) => {
        e.preventDefault();
        setMenuState(!menuState)
    };

    return (
        <section className='menu'>
            { menuState ? <Nav /> : null}
                
            <NavButton
                onClick={navButtonClick}
            />
        </section>
    );
};