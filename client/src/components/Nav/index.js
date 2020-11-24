import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNav } from '../../utils/navContext';
import { useAdmin, useAdminUpdate } from '../../utils/adminContext';
import './navStyle.css';

export const Nav = (props) => {
    const navHome = useNav();
    const adminStatus = useAdmin();
    const toggleAdmin = useAdminUpdate();

    const logout = () => {
        toggleAdmin();
        localStorage.removeItem('user');
    };

    return (
        <nav onClick={ props.closeNav }>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li>{ navHome? <a href='#home'>Home</a> : <Link to='/' exact='true'>Home</Link>}</li>
                    <li><a href='http://chastitybelt.limitedrun.com/store 'target='_blank' rel='noopener noreferrer'>Shop</a></li>
                    <li><Link to='/tour'>Tour</Link></li>
                    <li><a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Patreon</a></li>
                    <li><Link to='/fan-art'>Fan Art</Link></li>
                    <li><a href='/#contact'>Contact</a></li>
                    <ul className='socials-list'>
                        <li><a href='https://chastity-belt.bandcamp.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-bandcamp'></i></a></li>
                        <li><a href='https://twitter.com/chast1tybelt?lang=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a></li>
                        <li><a href='https://www.instagram.com/chazzybelt/?hl=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a></li>
                        <li><a href='https://www.facebook.com/chastitybeltmusic/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a></li>
                    </ul>
                    { adminStatus ? 
                        <li id='logout'><p onClick={logout}>logout</p></li>
                        : null }
                </ul>
            </div>
        </nav>
    );
};