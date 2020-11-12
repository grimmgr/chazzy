import React from 'react';
import './coverStyle.css';

export const Cover = () => {
    return (
        <div className='cover'>
            <h1>CHASTITY BELT</h1>
            <p>Self-titled album out now on Hardly Art!</p>
            <img className='album-cover' src='images/album_cover.jpg' alt='album cover' />
            <div className='buy'>
                <a className='barcode' href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>BUY</a>
            </div>
            
            <div className='patreon'>
                <a id='patreon' href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Join our Patreon <span className='wink'>;)</span></a>
            </div>
        </div>
    );
};