import React from 'react';
import '../Event/eventStyle.css';

export const NoEvents = () => {
    return (
        <div className='no-events'>
        <div className='event'>
            <div className='note'>
                <p className='venue'>We don't have anything planned at the moment ;(</p>
                <p className='updates'>join our mailing list below for updates!</p>
            </div>
        </div>
        </div>

    );
};