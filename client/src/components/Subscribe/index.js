import React from 'react';
import './subscribeStyle.css';

export const Subscribe = () => {
    return (
        <section id='subscribe' className='subscribe-container'>
            <div className='subscribe'>
            <h3>JOIN OUR MAILING LIST</h3>
            <form >
                <input type='text' placeholder='enter email address'/>
                <input className='subscribe-btn' type='submit' value='join'/>
            </form>
            </div>
        </section>
    );
};