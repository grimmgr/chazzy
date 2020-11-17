import React, { useState, useEffect } from 'react';
import { MerchItem } from '../components/MerchItem';
import merchData from '../merch.json';
import '../pageStyles/merchStyle.css';

export const MerchPage = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    // const imgContainer = document.querySelector('.merch-container');
    const imgContainerArray = document.querySelectorAll('.img-container');

    const test = () => {
        setTimeout(() => console.log(document.querySelector('.img-container').getBoundingClientRect()), 2000);
    }

    const rightArrowClick = () => {
        if (scrollPercentage > -700) {
            setScrollPercentage(prevPercent => prevPercent - 100);
        };
    };

    const leftArrowClick = () => {
        if (scrollPercentage < 0) {
            setScrollPercentage(prevPercent => prevPercent + 100);
        };
    };

    useEffect(() => {
        imgContainerArray.forEach(img => {
            img.style.transform = `translate(${scrollPercentage}%, 0)`;
        });
    }, [scrollPercentage])

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
                <div 
                    className='arrow scrollLeft'
                    onClick={ leftArrowClick }
                    >
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div 
                    className='arrow scrollRight'
                    onClick={ rightArrowClick }
                    >
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className='go-store'>
                <a href='http://chastitybelt.limitedrun.com/store' target='_blank'  rel='noopener noreferrer'>
                    <p>GO TO STORE</p>
                </a>
            </div>
            <p className='treat'>treat yourself ;)</p>
            { test() }
        </section>
    );
};