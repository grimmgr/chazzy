import React from 'react';

export const PrevArtCard = (props) => {
    return (
        <div className='prev-artwork-card'>
            <iframe className='prev-ig-iframe' src={props.link} frameBorder="0" scrolling="no" allowtransparency="true" title="title"></iframe>
            
        </div>
    );
};