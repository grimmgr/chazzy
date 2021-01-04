import React from 'react';
import LazyLoad from 'react-lazy-load';

export const MerchItem = (props) => {
    return (
        <div className='img-container'>
            <a href={ props.prodLink } target='_blank' rel='noopener noreferrer'>
                <LazyLoad
                    debounce={false}
                    offsetHorizontal={300}
                    offsetVertical={300}
                    >
                    <img src={ props.imgLink } alt={ props.alt } />
                </LazyLoad>
            </a>
        </div>
    );
};