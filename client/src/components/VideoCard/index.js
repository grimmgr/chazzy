import React from 'react';

export const VideoCard = (props) => {
    return (
        <div className='video-card'>
            <iframe src={props.link} frameborder="0" title={props.key} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};