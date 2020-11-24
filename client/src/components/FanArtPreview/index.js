import React from 'react';
import { useAos } from '../../utils/aosContext';
import { GoTo } from '../GoTo';
import './fanArtPrevStyle.css';

export const FanArtPreview = () => {
    const aos = useAos();
    return (
        <section id='fan-art-prev'>
            <h2 data-aos={ aos.fade_right }>FAN ART</h2>
            <div className='art-container'>
                <div className='artwork-card'>
                    {/* <div className='iframe-container'>
                        <iframe src="https://www.instagram.com/p/CHnunUoj8KX/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="title"></ iframe>
                    </div> */}
                </div>
            </div>
            <GoTo 
                link={'/fan-art'}
                name={'fan-art'}
                text={'SEE ALL'}
            />
            <p className='submit-yours'>and submit yours!</p>
        </section>
    );
};