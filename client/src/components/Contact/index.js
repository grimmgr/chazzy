import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './contactStyle.css';

export const Contact = () => {
    const [open, setOpen] = useState(false);
    const [contactHeight, setContactHeight] = useState(null);
    
    const toggleOpen = () => {
        setOpen(prevState => !prevState);
    }
    
    const buttonClick = (e) => {
        e.preventDefault();
        toggleOpen();
    }

    const calcHeight = (el) => {
        const height = el.offsetHeight + 54;
        setContactHeight(height);
    }

    console.log(contactHeight);

    return (
        <section id='contact' style={{ height: contactHeight }}>
            
            <h2 data-aos='fade-right' data-aos-offset='0'>CONTACT</h2>
            <CSSTransition
                in={!open}
                timeout={500}
                classNames={'contact-btn'}
            >
                <i 
                    className="down-arrow fas fa-chevron-down" 
                    onClick={buttonClick}
                ></i>
            </CSSTransition>
            <CSSTransition
                in={open}
                timeout={500}
                classNames={'contacts'}
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='contact-container'>
                    <ul className='contact-list'>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'>Management</li>
                                <li>Jessi Frick & Andi Wilson</li>
                                <li><a href='mailto:chastitybelt@citrinemanagement.com'>chastitybelt@citrinemanagement.com</a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'>Label</li>
                                <li>Hardly Art</li>
                                <li><a href='mailto:matt@hardlyart.com'>matt@hardlyart.com</a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'>Booking NA</li>
                                <li>Alisa Preisler</li>
                                <li><a href='mailto:alisa@groundcontroltouring.com'>alisa@groundcontroltouring.com</a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'>Booking EU</li>
                                <li>Anna Bewers</li>
                                <li><a href='mailto:anna.bewers@paradigmagency.com'>anna.bewers@paradigmagency.com</a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'>Publishing</li>
                                <li>Terrorbird</li>
                                <li><a href='mailto:syncteam@terrorbird.com'>syncteam@terrorbird.com</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </section>
    );
};