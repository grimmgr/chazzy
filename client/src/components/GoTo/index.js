import React from 'react';
// import { useAos } from '../../utils/aosContext';
import './goToStyle.css';

export const GoTo = (props) => {
    // const aos = useAos();
    return (
        <div 
        className={`go-to-container ${props.name}-link`}>
                <div className='go-to'>
                    <a href={props.link} target='_blank'  rel='noopener noreferrer'>
                        <p>{props.text}</p>
                    </a>
                </div>
                <div className='line'>
                </div>
            </div>
    );
};