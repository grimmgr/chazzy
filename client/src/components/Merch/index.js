import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useWidth } from '../../utils/widthContext';
import { MerchItem } from '../MerchItem';
import { GoTo } from '../GoTo';
import merchData from './merch.json';
import './merchStyle.css';

export const Merch = () => {

    const [ merchLinks, setMerchLinks ] = useState(false);
    const width = useWidth().width;

    const toggleMerchLinks = () => {
        merchLinks ? setMerchLinks(false) : setMerchLinks(true);
    }

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

            <div className='merch-links-container go-to-container'>
                <div className='merch-links go-to' onClick={toggleMerchLinks} onMouseEnter={()=> setMerchLinks(true)} onMouseLeave={()=> setMerchLinks(false)}>
                    <p>GO TO STORE</p>
                </div>
                <div className='line'></div>
                <CSSTransition
                    in={merchLinks}
                    timeout={200}
                    classNames='store-links'
                    unmountOnExit
                    >
                    <div className='store-links' onMouseEnter={()=> setMerchLinks(true)} onMouseLeave={()=> setMerchLinks(false)}>
                        <a href='http://chastitybelt.limitedrun.com/store' target='_blank' rel='noopener noreferrer'><p>US</p></a>
                        <a href='https://chastitybelt.ochre.store/' target='_blank' rel='noopener noreferrer'><p>UK</p></a>
                    </div>
                </CSSTransition>
            </div>

            <p className='treat'>treat yourself ;)</p>
        </section>
    );
};

