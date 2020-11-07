import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><a href='https://www.hardlyart.com/artists/chastity_belt' target='_blank'>About</a></li>
                <li><NavLink to='/shows'>Shows</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><a href='http://chastitybelt.limitedrun.com/store 'target='_blank'>Shop</a></li>
                <li><NavLink to='/fan-art'>Fan Art</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
};