import React from 'react';
import { MerchItem } from '../components/MerchItem';
import merchData from '../merch.json';
import '../pageStyles/merchStyle.css';

export const MerchPage = () => {
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
                <div className='arrow scrollLeft'>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className='arrow scrollRight'>
                    <i class="fas fa-chevron-right"></i>
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