import React from 'react';
import { useAos } from '../../utils/aosContext';
import './eventStyle.css';

export const Event = (props) => {
    const aos = useAos();
    const date = new Date(props.date);
    const formattedDate = date.toDateString().slice(0, -5).toUpperCase();
    console.log(props.tickets)
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
                <p className='city'>{props.city}, { (props.country === 'United Kingdom') ? 'UK' : props.country }</p>
                <p className='venue'>{props.venue}</p>
            </div>
            }

            { props.tickets.length ?
            <div className='tickets link'>
                <a href={props.tickets[0].url} target='_blank' rel='noopener noreferrer'><p>TICKETS</p></a>
            </div>
            : null }
            <div className='rsvp link'>
                <a href={props.url} target='_blank' rel='noopener noreferrer'><p>RSVP</p></a>
            </div>
        </div>
    );
};