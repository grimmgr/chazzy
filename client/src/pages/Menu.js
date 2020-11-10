import React, { useState } from 'react';
import { NavButton } from '../components/NavButton';
import { Nav } from '../components/Nav';

export const Menu = () => {
    const [menuState, setMenuState] = useState(false);

    const navButtonClick = (e) => {
        e.preventDefault();
        setMenuState(!menuState)
    };

    return (
        <section id='menu'>
            { menuState ? <Nav /> : null}
                
            <NavButton
                onClick={navButtonClick}
            />
        </section>
    );
};