import React from 'react';
import { GoTo } from '../components/GoTo';
import '../pageStyles/homeStyle.css';

export const Home = () => {
    return (
        <section id='home'>
            <div class='home-title'>
                <h1>CHASTITY BELT</h1>
                <div className='listen'>
                <a href='https://ffm.to/chazzy' target='_blank' rel="noopener noreferrer">
                    <p>LISTEN</p>
                </a>
                </div>
            </div>
            <div className='cover'>
                <img className='album-cover' src='images/album_cover.png' alt='album cover' />
                <div className='buy'>
                    <a className='barcode' href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>BUY</a>
                </div>
                <GoTo 
                link={'https://www.patreon.com/chastitybelt'}
                name={'patreon'}
                text={'JOIN OUR PATREON'}
                />
            </div>
        </section>
    );
};