import React from 'react';
import './noEventsStyle.css';

export const NoEvents = () => {
    return (
        <div className='no-events'>
            <div className='note'>
            <p>There are no upcoming events ;(
            <br/>
            <a href='#subscribe'>Join our mailing list</a> for updates!</p>
            </div>
        </div>
    );
};