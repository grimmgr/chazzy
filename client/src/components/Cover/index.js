import React from 'react';
import './coverStyle.css';

export const Cover = () => {
    return (
        <div className='cover'>
            <h1>CHASTITY BELT</h1>
            <img src='images/album_cover.jpg' alt='album cover' />
            <p>Self-titled album out now on Hardly Art</p>
            <a href='https://ffm.to/chazzy' target='_blank' rel='noopener noreferrer'>Listen</a>
            <span> | </span>
            <a href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener noreferrer'>Buy</a>
            <br />
            <a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Join our Patreon ;)</a>
            <p>merch merch merch merch</p>
        </div>
    );
};