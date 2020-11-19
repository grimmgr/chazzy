import React from 'react';

export const Event = (props) => {
    return (
        <div className='event'>
            <p>{props.date}</p>
            <p>{props.city}</p>
            <p>{props.venue}</p>
            <a href={props.uri} target='_blank' rel='noopener noreferrer'><p>tickets</p></a>
        </div>
    );
};