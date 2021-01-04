import React, { useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useWidth } from '../../utils/widthContext';
import './contactStyle.css';

export const Contact = () => {
    const width = useWidth().width;
    const [open, setOpen] = useState(false);
    const [contactHeight, setContactHeight] = useState((width < 500) ? 60 : 80);
    const bottomEl = useRef();
    
    const toggleOpen = () => {
        setOpen(prevState => !prevState);
    }
    
    const buttonClick = (e) => {
        e.preventDefault();
        toggleOpen();
    }

    const scroll = () => {
        bottomEl.current.scrollIntoView({ behavior: "smooth"});
    }

    const grow = () => {
        setContactHeight((width < 500) ? 605 : 650);
    }

    const shrink = () => {
        setContactHeight((width < 500) ? 60 : 80);
    }

    return (
        <section id='contact' className={'contact-sctn'} style={{ height: contactHeight }} >
            
            <h2 onClick={buttonClick}>CONTACT</h2>
            <CSSTransition
                in={!open}
                timeout={500}
                classNames={'contact-btn'}
            >
                <i 
                    className="down-arrow fas fa-chevron-up" 
                    onClick={buttonClick}
                ></i>
            </CSSTransition>
            <CSSTransition
                in={open}
                timeout={300}
                classNames={'contact-sctn'}
                unmountOnExit
                onEnter={grow}
                onEntered={scroll}
                onExit={shrink}

                >
                <div className='contact-container'>
                    <ul className='contact-list'>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li><p className='title'>MANAGEMENT</p></li>
                                <li><p className='contact-name'>Jessi Frick & Andi Wilson</p></li>
                                <li><a href='mailto:chastitybelt@citrinemanagement.com'><p className='contact-name'>chastitybelt@citrinemanagement.com</p></a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li className='title'><p></p>LABEL</li>
                                <li><p className='contact-name'></p>Hardly Art</li>
                                <li><a href='mailto:matt@hardlyart.com'><p className='contact-name'></p>matt@hardlyart.com</a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li><p className='title'>BOOKING NA</p></li>
                                <li><p className='contact-name'>Alisa Preisler</p></li>
                                <li><a href='mailto:alisa@groundcontroltouring.com'><p className='contact-name'>alisa@groundcontroltouring.com</p></a></li>
                            </ul>
                        </li>
                        <li className='contact'>
                            <ul className='contact-info'>
                                <li><p className='title'>BOOKING EU</p></li>
                                <li><p className='contact-name'>Anna Bewers</p></li>
                                <li><a href='mailto:anna.bewers@paradigmagency.com'><p className='contact-name'>anna.bewers@paradigmagency.com</p></a></li>
                            </ul>
                        </li>
                        <li className='contact' ref={bottomEl}>
                            <ul className='contact-info'>
                                <li><p className='title'>PUBLISHING</p></li>
                                <li><p className='contact-name'>Terrorbird</p></li>
                                <li><a href='mailto:syncteam@terrorbird.com'><p className='contact-name'>syncteam@terrorbird.com</p></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </section>
        
    );
};