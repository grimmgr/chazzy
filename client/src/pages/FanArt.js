import React from 'react';
import '../pageStyles/fanArtStyle.css';

export const FanArtPage = () => {
    return (
        <section id='fan-art'>
            <h2>Fan Art</h2>
            <div className='art-container'>
                <div className='artwork-card'>
                    <div className='iframe-container'>
                        <iframe src="https://www.instagram.com/p/BhMcwhIg1pu/embed" width="320" height="310" frameBorder="0" scrolling="no" allowtransparency="true" title="title"></ iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};