import React from 'react';
import './artCardStyle.css';

export const ArtCard = (props) => {
    return (
        <div className='artwork-card'>
            <div className='iframe-container'>
                <iframe src={props.link} frameBorder="0" scrolling="no" allowtransparency="true" title="title"></ iframe>
            </div>
        </div>
    );
};