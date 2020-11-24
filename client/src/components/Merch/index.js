import React from 'react';
import { useAos } from '../../utils/aosContext';
import { MerchItem } from '../MerchItem';
import { GoTo } from '../GoTo';
import merchData from './merch.json';
import './merchStyle.css';

export const Merch = () => {

    const aos = useAos();

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += 420;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= 420;
    };

    return (
        <section id='merch'>
            <h2 data-aos={aos.fade_right}>MERCH</h2>
            
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
            <GoTo 
                link={'http://chastitybelt.limitedrun.comstore'}
                name={'store'}
                text={'GO TO STORE'}
            />
            <p className='treat'>treat yourself ;)</p>
        </section>
    );
};

