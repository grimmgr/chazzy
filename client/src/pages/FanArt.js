import React from 'react';
import '../pageStyles/fanArtStyle.css';

export const FanArtPage = () => {
    const getEmbedLink = (shareLink) => {
        const embedLink = shareLink.split('?')[0] + 'embed';
        return embedLink;
    }
    return (
        <section id='fan-art'>
            <h2>FAN ART</h2>
            <div className='art-container'>
                <div className='artwork-card'>
                    <div className='iframe-container'>
                        <iframe src="https://www.instagram.com/p/CHnunUoj8KX/embed "frameBorder="0" scrolling="no" allowtransparency="true" title="title"></ iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};