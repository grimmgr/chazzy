import React from 'react';
import './navStyle.css';
// import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#shows'>Shows</a></li>
                <li><a href='http://chastitybelt.limitedrun.com/store 'target='_blank' rel='noopener noreferrer'>Shop</a></li>
                <li><a href='#fan-art'>Fan Art</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
};