import React from 'react';
import { useWidth } from '../../utils/widthContext';
import { MerchItem } from '../MerchItem';
import { GoTo } from '../GoTo';
import merchData from './merch.json';
import './merchStyle.css';

export const Merch = () => {

    const width = useWidth().width;

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += width;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= width;
    };

    

    return (
        <section id='merch'>
            <h2>MERCH</h2>
            
            <div className='merch-wrapper'>
                <div className='merch-container'>
                    { merchData.map(merch => (
                        <MerchItem 
                        key={ merch.name }
                        prodLink={ merch.product_link }
                        imgLink={ merch.image_link }
                        alt={ merch.alt_text }
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
            <GoTo 
                link='http://chastitybelt.limitedrun.com/store'
                name='store'
                text='GO TO STORE'
                external='true'
            />
            <p className='treat'>treat yourself ;)</p>
        </section>
    );
};

