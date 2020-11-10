import React from 'react';
import './navStyle.css';
// import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#shows'>Shows</a></li>
                    <li><a href='http://chastitybelt.limitedrun.com/store 'target='_blank' rel='noopener noreferrer'>Shop</a></li>
                    <li><a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Patreon</a></li>
                    <li><a href='#fan-art'>Fan Art</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <ul className='socials-list'>
                        <li><a href='https://chastity-belt.bandcamp.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-bandcamp'></i></a></li>
                        <li><a href='https://twitter.com/chast1tybelt?lang=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a></li>
                        <li><a href='https://www.instagram.com/chazzybelt/?hl=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a></li>
                        <li><a href='https://www.facebook.com/chastitybeltmusic/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a></li>
                    </ul>
                </ul>
            </div>
        </nav>
    );
};