import React from 'react';
import './coverStyle.css';

export const Cover = () => {
    return (
        <div className='cover'>
            <p>Self-titled album out now on Hardly Art!</p>
            <img src='images/album_cover.jpg' alt='album cover' />
            <div className='buy'>
                <a className='barcode' href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>BUY</a>
            </div>
            
            <div className='listen-patreon'>
                <a id='listen' href='https://ffm.to/chazzy' target='_blank' rel='noopener noreferrer'>Listen</a>
                <a id='patreon' href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Join our Patreon <span className='wink'>;)</span></a>
            </div>
        </div>
    );
};