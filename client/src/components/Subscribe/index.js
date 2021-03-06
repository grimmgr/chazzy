import React, { useState } from 'react';
import { useSubscribe } from '../../utils/subscribeContext';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import './subscribeStyle.css';

export const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const setOpenSubscribe = useSubscribe().setOpenSubscribe;
    const [yay, setYay] = useState(false);

    const subscribe = (e) => {
        e.preventDefault();
        setSubmitStatus(false);
        axios.post('/subscribe', {
            email_address: email,
            status: 'subscribed'
        })
        .then((response) => {
            
            if ( response.data.status === 400 ) {
                if ( response.data.title === 'Member Exists') {
                    setSubmitStatus('alreadyMember');
                    setYay(true);
                    setEmail('');
                } else if ( response.data.title === 'Invalid Resource') {
                    setSubmitStatus('invalidEmail');
                } else {
                    setSubmitStatus('cantProcess')
                }
            } else {
                setEmail('');
                setSubmitStatus('joined');
                setYay(true);
            }

        })
        .catch(err => setSubmitStatus(err));
    }

    return (
        <section id='subscribe' className='big-display'>
                    <div id='subscribe-container' className='big-display-container'>
                        <div className='close-display-container'>
                            <div className='close-display-btn' onClick={() => setOpenSubscribe(false)} >
                                <span className='left-display'></span>
                                <span className='right-display'></span>
                            </div>
                        </div>
                        <div className='subscribe-form-container'>
                            <div className='subscribe-heading'>
                                <h3>JOIN OUR MAILING LIST</h3>
                                <p>for updates on new music and tour dates!</p>
                            </div>
                            <form className='subscribe-form'>
                                <input 
                                    type='email'
                                    placeholder='enter email address' 
                                    required pattern='\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b'
                                    value={email}
                                    onChange={ (e) => setEmail(e.target.value)}
                                    />
                                <button
                                    onClick={subscribe} 
                                    className='subscribe-btn'>join</button>
                            </form>
                        </div>
                        <div className='join-msg-container'>
                    
                            <CSSTransition
                                in={( submitStatus === 'alreadyMember' )}
                                timeout={500}
                                classNames={'join-msg'}
                                unmountOnExit
                                >
                                <p className='join-msg'>looks like you're already on our mailing list!</p>
                            </CSSTransition>

                            <CSSTransition
                                in={( submitStatus === 'invalidEmail' )}
                                timeout={500}
                                classNames={'join-msg'}
                                unmountOnExit
                                >
                                <p className='join-msg'>please enter a valid email address</p>
                            </CSSTransition>

                            <CSSTransition
                                in={( submitStatus === 'cantProcess' )}
                                timeout={500}
                                classNames={'join-msg'}
                                unmountOnExit
                                >
                                <p className='join-msg'>hmmm something's up... double check you've entered a valid email address and if it's still not working shoot us an email at beltchastity@gmail.com</p>
                            </CSSTransition>

                            <CSSTransition
                                in={( submitStatus === 'joined' )}
                                timeout={500}
                                classNames={'join-msg'}
                                unmountOnExit
                                >
                                <p className='join-msg'>Cheers! We'll be in touch ;)</p>
                            </CSSTransition>
                        </div>
                        <CSSTransition
                            in={yay}
                            timeout={200}
                            classNames={'cheers'}
                            unmountOnExit
                            >
                            <div className='cheers'>
                                <img className='smiley' src='images/smiley_pink.png' alt='smiley face'></img>
                            </div>
                        </CSSTransition>
                    </div>
        </section>
    );
};