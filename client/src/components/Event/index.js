import React from 'react';
import { useAos } from '../../utils/aosContext';
import './eventStyle.css';

export const Event = (props) => {
    const aos = useAos();
    const date = new Date(props.date);
    const formattedDate = date.toDateString().slice(0, -5).toUpperCase();
    return (
        <div className='event' data-aos={aos.fade_up}>
            <p className='date'>{formattedDate}</p>
            <p className='city'>{props.city}</p>
            <p className='venue'>{props.venue}</p>
            <div className='tickets link'>
            <a href={props.uri} target='_blank' rel='noopener noreferrer'><p>TICKETS</p></a>
            </div>
        </div>
    );
};