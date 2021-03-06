import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useWidth } from '../../utils/widthContext';
import { PrevArtCard } from '../PrevArtCard';
import { GoTo } from '../GoTo';
import './fanArtPrevStyle.css';

export const FanArtPreview = () => {
    const [art, setArt] = useState([]);

    const width = useWidth().width;
    // const scrollWidth = ( width < 600 ) ? width : 0.5 * width;

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += width;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= width;
    };

    useEffect(() => {
        axios.get('/api/fan-art?verified=true')
        .then(response => {
            const displayArt = response.data.slice(0, 6);
            setArt(displayArt);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section id='fan-art-prev'>
            <h2>FAN ART</h2>
            <div className='art-prev-wrapper'>
                <div className='art-prev-container'>
                { art.map(art => (
                        <PrevArtCard
                        key={art._id}
                        title={art._id}
                        link={art.embed_link}
                        />
                    ))}
                </div>
                <i 
                    id='art-arrow-l'
                    className='arrow scrollLeft fas fa-chevron-left'
                    onClick={ leftArrowClick }
                >
                </i>
                <i 
                    id='art-arrow-r'
                    className='arrow scrollRight fas fa-chevron-right'
                    onClick={ rightArrowClick }
                    >
                </i>
            </div>
            <GoTo 
                link={'/fan-art'}
                name={'fan-art'}
                text={'SEE ALL'}
            />
            <p id='submit-yours' className='treat'>and submit yours!</p>
        </section>
    );
};