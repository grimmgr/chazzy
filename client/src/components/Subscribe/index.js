import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { JoinMsg } from '../JoinMsg';
import './subscribeStyle.css';

export const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    // const [yay, setYay] = useState('');

    const subscribe = (e) => {
        e.preventDefault();
        setSubmitStatus(false);
        axios.post('/subscribe', {
            email_address: email,
            status: 'subscribed'
        })
        .then((response) => {
            console.log(response);
            
            if ( response.data.status === 400 ) {
                if ( response.data.title === 'Member Exists') {
                    setSubmitStatus('alreadyMember');
                    setEmail('');
                } else if ( response.data.title === 'Invalid Resource') {
                    setSubmitStatus('invalidEmail');
                } else {
                    setSubmitStatus('cantProcess')
                }
            } else {
                setEmail('');
                setSubmitStatus('yay');
            }

        })
        .catch(err => setSubmitStatus(err));
    }

    useEffect(() => {
        if ( submitStatus ) {
            setSubmitted(true);
        }
        
    }, [submitStatus])

    return (
        <section id='subscribe' className='subscribe-container'>
            <div className='subscribe'>
            <h3>JOIN OUR MAILING LIST</h3>
            <form>
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
            <CSSTransition
            in={submitted}
            timeout={5000}
            classNames={'join-msg'}
            unmountOnExit
            >
                <JoinMsg status={submitStatus} />
            </CSSTransition>
            </div>
        </section>
    );
};