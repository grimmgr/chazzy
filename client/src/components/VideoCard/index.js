import React from 'react';
import LazyLoad from 'react-lazy-load';

export const VideoCard = (props) => {
    return (
        <div className='video-card'>
            <LazyLoad
                debounce={false}
                offsetHorizontal={300}
                offsetVertical={300}
                >
                <iframe src={props.link} frameBorder="0" title={props.name} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </LazyLoad>
        </div>
    );
};