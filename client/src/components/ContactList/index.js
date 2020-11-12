import React from 'react';
import './contactStyle.css';

export const ContactList = () => {
    return (
        <div className='contact-container'>
            <ul className='contact-list'>
                <li>
                    <ul className='contact-info'>
                        <li className='title'>Management</li>
                        <li>Jessi Frick & Andi Wilson</li>
                        <li><a href='mailto:chastitybelt@citrinemanagement.com'>chastitybelt@citrinemanagement.com</a></li>
                    </ul>
                </li>
                <li>
                    <ul className='contact-info'>
                        <li className='title'>Label</li>
                        <li>Hardly Art</li>
                        <li><a href='mailto:matt@hardlyart.com'>matt@hardlyart.com</a></li>
                    </ul>
                </li>
                <li>
                    <ul className='contact-info'>
                        <li className='title'>Booking NA</li>
                        <li>Alisa Preisler</li>
                        <li><a href='mailto:alisa@groundcontroltouring.com'>alisa@groundcontroltouring.com</a></li>
                    </ul>
                </li>
                <li>
                    <ul className='contact-info'>
                        <li className='title'>Booking EU</li>
                        <li>Anna Bewers</li>
                        <li><a href='mailto:anna.bewers@paradigmagency.com'>anna.bewers@paradigmagency.com</a></li>
                    </ul>
                </li>
                <li>
                    <ul className='contact-info'>
                        <li className='title'>Publishing</li>
                        <li>Terrorbird</li>
                        <li><a href='mailto:syncteam@terrorbird.com'>syncteam@terrorbird.com</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};