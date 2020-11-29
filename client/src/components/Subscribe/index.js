import React, { useState } from 'react';
import axios from 'axios';
import './subscribeStyle.css';

export const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [yay, setYay] = useState('');

    const subscribe = (e) => {
        e.preventDefault();
        axios.post('/subscribe', {
            email_address: email,
            status: 'subscribed'
        })
        .then((response) => {
            console.log(response);
            if ( response.data.status === 400 ) {
                if ( response.data.title === 'Member Exists') {
                    setError('alreadyMember');
                } if ( response.data.title === 'Invalid Resource') {
                    setError('invalidEmail');
                } else {
                    setError('cantProcess')
                }
            } else {
                setYay('yay');
            }

        })
        .catch(err => setError(err));
    }



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
            </div>
        </section>
    );
};