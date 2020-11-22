import React from 'react';
import '../pageStyles/contactStyle.css';

export const Contact = () => {
    return (
        <section id='contact'>
            <h2>CONTACT</h2>
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
        </section>
    );
};