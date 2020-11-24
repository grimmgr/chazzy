import React, { useState } from 'react';
// import { useAos } from '../utils/aosContext';
import '../pageStyles/contactStyle.css';

export const Contact = () => {
    // const aos = useAos();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(prevState => !prevState);
    }
    const buttonClick = (e) => {
        e.preventDefault();
        toggleOpen();
    }
    return (
        <section id='contact'>
            <div className='display-contact'><i className="fas fa-chevron-down" onClick={buttonClick}></i></div>
            <h2>CONTACT</h2>
            { open ?
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
            : null }
        </section>
    );
};