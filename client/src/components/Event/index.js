import React from 'react';
import { useAos } from '../../utils/aosContext';
import './eventStyle.css';

export const Event = (props) => {
    const aos = useAos();
    const date = new Date(props.date);
    const formattedDate = date.toDateString().slice(0, -5).toUpperCase();
    console.log(date.toTimeString());
    console.log(props.venue);
    return (
        <div className='event' data-aos={aos.fade_up}>
            <p className='date'>{formattedDate}</p>
            { (props.venue === 'Streaming LIVE') ?
            <div>
                <p className = 'city'>{props.venue}</p>
                <p className='venue'>{props.timezone}</p> 
            </div>
              :
              <div>
                <p className='city'>{props.city}, {props.country}</p>
                <p className='venue'>{props.venue}</p>
            </div>
            }
            <div className='tickets link'>
                <a href={props.tickets} target='_blank' rel='noopener noreferrer'><p>TICKETS</p></a>
            </div>
            <div className='rsvp link'>
                <a href={props.url} target='_blank' rel='noopener noreferrer'><p>RSVP</p></a>
            </div>
        </div>
    );
};