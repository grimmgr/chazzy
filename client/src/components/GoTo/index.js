import React from 'react';
import { Link } from 'react-router-dom';
import './goToStyle.css';

export const GoTo = (props) => {
    return (
        <div className={`go-to-container ${props.name}-link`}>
            <div className='go-to'>
                {props.external ?
                    <a href={props.link} target='_blank' rel='noopener noreferrer'>
                        <p>{props.text}</p>
                    </a>
                :
                <Link to={props.link}><p>{props.text}</p></Link>
                }
            </div>
            
            <div className='line'></div>
        </div>
    );
};