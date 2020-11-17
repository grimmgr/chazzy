import React from 'react';
import '../pageStyles/merchStyle.css';

export const MerchPage = () => {
    return (
        <section id='merch'>
            <h2>New Merch!</h2>
            <div className='merch-container'>
                <div className='img-container'>
                    <a href='http://chastitybelt.limitedrun.com/products/683025-cool-slut-beanie' target='_blank' rel='noopener noreferrer'>
                        <img src='./images/beanie.png' alt='black cool slut beanie' />
                    </a>
                </div>
                <div className='img-container'>
                    <a href='http://chastitybelt.limitedrun.com/products/677737-chasing-a-dream-long-sleeve-tee' target='_blank' rel='noopener noreferrer'>
                        <img src='./images/shirt.png' alt='long sleeve shirt' />
                    </a>
                </div>
            </div>
            <div className='go-store'>
                <a href='http://chastitybelt.limitedrun.com/store' target='_blank'  rel='noopener noreferrer'>
                    <p>GO TO STORE</p>
                </a>
            </div>
            <p className='treat'>treat yourself ;)</p>
        </section>
    );
};