import React from 'react';
import './socialsStyle.css';

export const Socials = () => {
    return (
        <ul className='socials-list'>
            <li><a href='https://chastity-belt.bandcamp.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-bandcamp'></i></a></li>
            <li><a href='https://twitter.com/chast1tybelt?lang=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a></li>
            <li><a href='https://www.instagram.com/chazzybelt/?hl=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a></li>
            <li><a href='https://www.facebook.com/chastitybeltmusic/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a></li>
            <li><a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'><i className='fab fa-patreon'></i></a></li>
        </ul>
    );
};