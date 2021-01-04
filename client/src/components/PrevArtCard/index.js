import React from 'react';
import LazyLoad from 'react-lazy-load';

export const PrevArtCard = (props) => {
    return (
        <div className='prev-artwork-card'>
            <LazyLoad
                debounce={false}
                offsetHorizontal={300}
                offsetVertical={500}
                >
                <iframe className='prev-ig-iframe' src={props.link} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={props.title}></iframe>
            </LazyLoad>
        </div>
    );
};