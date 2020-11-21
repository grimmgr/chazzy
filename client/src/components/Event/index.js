import React from 'react';
import './eventStyle.css';

export const Event = (props) => {
    const date = new Date(props.date);
    const formattedDate = date.toDateString().slice(0, -5).toUpperCase();
    return (
        <div className='event'>
            <p className='date'>{formattedDate}</p>
            <p className='city'>{props.city}</p>
            <p className='venue'>{props.venue}</p>
            <div className='tickets link'>
            <a href={props.uri} target='_blank' rel='noopener noreferrer'><p>TICKETS</p></a>
            </div>
        </div>
    );
};