import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAos } from '../../utils/aosContext';
import { PrevArtCard } from '../PrevArtCard';
import { GoTo } from '../GoTo';
import './fanArtPrevStyle.css';

export const FanArtPreview = () => {
    const aos = useAos();
    const [art, setArt] = useState([]);

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += 420;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= 420;
    };

    useEffect(() => {
        axios.get('/api/fan-art?verified=true')
        .then(response => {
            const displayArt = response.data.slice(0, 15);
            setArt(displayArt);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section id='fan-art-prev'>
            <h2 data-aos={ aos.fade_right }>FAN ART</h2>
            <div className='art-prev-wrapper'>
                <div className='art-prev-container'>
                { art.map(art => (
                        <PrevArtCard
                        key={art._id}
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
            <p className='submit-yours'>and submit yours!</p>
        </section>
    );
};