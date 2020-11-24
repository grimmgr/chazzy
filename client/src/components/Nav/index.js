import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useNav } from '../../utils/navContext';
import './navStyle.css';

export const Nav = (props) => {
    const navHome = useNav();
    return (
        <Router>
        <nav onClick={ props.closeNav }>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li><Link to={ navHome ? '#home' : '/' } exact='true'>Home</Link></li>
                    <li><a href='http://chastitybelt.limitedrun.com/store 'target='_blank' rel='noopener noreferrer'>Shop</a></li>
                    <li><a href='/tour'>Tour</a></li>
                    <li><a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Patreon</a></li>
                    <li><a href='/fan-art'>Fan Art</a></li>
                    <li><a href={ navHome ? '#contact' : '/#contact' }>Contact</a></li>
                    <ul className='socials-list'>
                        <li><a href='https://chastity-belt.bandcamp.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-bandcamp'></i></a></li>
                        <li><a href='https://twitter.com/chast1tybelt?lang=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a></li>
                        <li><a href='https://www.instagram.com/chazzybelt/?hl=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a></li>
                        <li><a href='https://www.facebook.com/chastitybeltmusic/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a></li>
                    </ul>
                </ul>
            </div>
        </nav>
        </Router>
    );
};