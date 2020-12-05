
import React from 'react';
import './noEventStyle.css';

export const NoEvents = () => {
    return (
        <div className='no-event-container'>
            <div className='no-event'>
                <div className='no-event-note'>
                    <p className='venue'>We don't have anything planned at the moment ;(</p>
                    <p className='updates'>join our mailing list below for updates! <span className='se-arrow'>&#8600;</span></p>
                </div>
            </div>
        </div>

    );
};