import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Nav } from '../components/Nav';
import '../pageStyles/menuStyle.css';

export const Menu = () => {
    const [open, setOpen] = useState(false);

    const navButtonClick = (e) => {
        e.preventDefault();
        setOpen(!open)
    };

    return (
        <section id='menu'>
            <CSSTransition
            in={open}
            timeout={500}
            classNames={'open-nav'}
            unmountOnExit
            >
            <Nav />
            </CSSTransition>
            <CSSTransition
            in={!open}
            timeout={500}
            classNames={'close-btn'}
            >  
                <div className='nav-button' onClick={ navButtonClick }>
                    <span className='top'></span>
                    <span className='middle'></span>
                    <span className='bottom'></span>
                </div>
            </CSSTransition>
        </section>
    );
};