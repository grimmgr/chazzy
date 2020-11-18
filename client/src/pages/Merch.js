import React from 'react';
import { MerchItem } from '../components/MerchItem';
import merchData from '../merch.json';
import '../pageStyles/merchStyle.css';

export const MerchPage = () => {

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += 420;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= 420;
    };

    return (
        <section id='merch'>
            <h2>New Merch!</h2>
            <div className='merch-wrapper'>
                <div className='merch-container'>
                    { merchData.map(merch => (
                        <MerchItem 
                        key={ merch.name }
                        prodLink={ merch.product_link }
                        imgLink={ merch.image_link }
                        />
                    )) }
                </div>
                <i 
                    className='arrow scrollLeft fas fa-chevron-left'
                    onClick={ leftArrowClick }
                >
                </i>
                <i 
                    className='arrow scrollRight fas fa-chevron-right'
                    onClick={ rightArrowClick }
                    >
                </i>
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