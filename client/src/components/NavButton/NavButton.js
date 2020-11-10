import React from 'react';
import './navButtonStyle.css';

export const NavButton = (props) => {
    return (
        <div className='nav-button' onClick={props.onClick}>
            <span className='top'></span>
            <span className='middle'></span>
            <span className='bottom'></span>
        </div>
    );
};

