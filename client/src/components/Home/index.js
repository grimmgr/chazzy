import React from 'react';
import { GoTo } from '../GoTo';
import './homeStyle.css';

export const Home = () => {
    return (
        <section id='home'>
            <div className='home-title'>
                <h1>CHASTITY BELT</h1>
            </div>
            <div className='home-links'>
                <div className='home-msg-container'>
                    <p className='home-msg'>self-titled album</p>
                    <p className='out-now home-msg'>out now</p>
                </div>
                <div className='buy-listen'>
                    <a href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>
                        <p>BUY</p>
                    </a>
                </div>
                <div className='buy-listen'>
                    <a href='https://ffm.to/chazzy' target='_blank' rel="noopener noreferrer">
                        <p>LISTEN</p>
                    </a>
                </div>
            </div>
            
            
            <div className='cover'>
                <img className='album-cover' src='images/album_cover.png' alt='album cover' />
                <GoTo 
                link={'https://www.patreon.com/chastitybelt'}
                name={'patreon'}
                text={'JOIN OUR PATREON'}
                />
            </div>
        </section>
    );
};