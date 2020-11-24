import React, { useEffect } from 'react';
import { GoTo } from '../components/GoTo';
import { useNav, useNavSetTrue } from '../utils/navContext';
import '../pageStyles/homeStyle.css';

export const Home = () => {
    const setNavHomeTrue = useNavSetTrue();
    const navHome = useNav();
    useEffect(() => {
        setNavHomeTrue();
    });
    return (
        <section id='home'>
            {console.log(`navHome: ${navHome}`)}
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
                {/* <div className='buy'>
                    <a className='barcode' href='https://www.hardlyart.com/releases/chastity_belt/chastity_belt' target='_blank' rel='noopener  noreferrer'>BUY</a>
                </div> */}
                <GoTo 
                link={'https://www.patreon.com/chastitybelt'}
                name={'patreon'}
                text={'JOIN OUR PATREON'}
                />
            </div>
        </section>
    );
};