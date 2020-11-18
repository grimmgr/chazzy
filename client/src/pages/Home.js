import React from 'react';
import '../pageStyles/homeStyle.css';

export const HomePage = () => {
    return (
        <section id='home'>
            <div className='cover'>
                <h1>CHASTITY BELT</h1>
                <p>Self-titled album out now on Hardly Art!</p>
                <div className='listen'>
                    <a href='https://ffm.to/chazzy' target='_blank' rel="noopener noreferrer">
                        <p>LISTEN</p>
                    </a>
                </div>
                <img className='album-cover' src='images/album_cover.jpg' alt='album cover' />
                <div className='buy'>
                    <a className='barcode' href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>BUY</a>
                </div>
                
                <div className='patreon'>
                    <a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>
                        <p>Join our Patreon</p>
                        </a>
                </div>
            </div>
        </section>
    );
};