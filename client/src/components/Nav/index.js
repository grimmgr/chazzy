import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNav } from '../../utils/navContext';
import { useAdmin } from '../../utils/adminContext';
import { CSSTransition } from 'react-transition-group';
import './navStyle.css';

export const Nav = (props) => {
    const navHome = useNav().navHome;
    const {admin, setAdmin} = useAdmin();
    const [ merchLinks, setMerchLinks ] = useState(false);

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('user');
    };

    const toggleMerchLinks = () => {
        merchLinks ? setMerchLinks(false) : setMerchLinks(true);
    }

    return (
        <nav onClick={ props.closeNav }>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li>{ navHome ? <a href='#home'>Home</a> : <Link to='/' exact='true'>Home</Link>}</li>
                    <li>
                        <a href='' onClick={toggleMerchLinks} onMouseEnter={()=> setMerchLinks(true)} onMouseLeave={()=> setMerchLinks(false)}>Shop</a>
                        <CSSTransition
                            in={merchLinks}
                            timeout={200}
                            classNames='store-links'
                            unmountOnExit
                            >
                            <div id='nav-store-links' className='store-links' onMouseEnter={()=> setMerchLinks(true)} onMouseLeave={()=> setMerchLinks(false)}>
                                <a href='http://chastitybelt.limitedrun.com/store' target='_blank' rel='noopener noreferrer'><p>US</p></a>
                                <a href='https://chastitybelt.terriblemerch.com/' target='_blank' rel='noopener noreferrer'><p>UK</p></a>
                            </div>
                        </CSSTransition>
                    </li>
                    
                    <li><Link to='/tour'>Tour</Link></li>
                    <li><a href='https://www.patreon.com/chastitybelt' target='_blank' rel='noopener noreferrer'>Patreon</a></li>
                    <li><Link to='/fan-art'>Fan Art</Link></li>
                    <li><Link to={{
                            pathname: '/',
                            hash: '#contact'
                        }}>Contact</Link></li>
                    <ul className='socials-list'>
                        <li><a href='https://chastity-belt.bandcamp.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-bandcamp'></i></a></li>
                        <li><a href='https://twitter.com/chast1tybelt?lang=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a></li>
                        <li><a href='https://www.instagram.com/chazzybelt/?hl=en' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a></li>
                        <li><a href='https://www.facebook.com/chastitybeltmusic/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a></li>
                    </ul>
                    { admin ? 
                        <li id='logout'><p onClick={logout}>logout</p></li>
                        : null }
                </ul>
            </div>
        </nav>
    );
};