import React from 'react';

export const VideoCard = (props) => {
    return (
        <div className='video-card'>
            <iframe src={props.link} frameBorder="0" title={props.name} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};