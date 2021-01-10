import React from 'react';
import { useWidth } from '../../utils/widthContext';
import { VideoCard } from '../VideoCard';
import { GoTo } from '../GoTo'
import './videoStyle.css';
import videoData from './video.json';

export const Video = () => {
    const width = useWidth().width;

    const rightArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft += width;
    };

    const leftArrowClick = (e) => {
        e.target.parentElement.firstChild.scrollLeft -= width;
    };
    return (
        <section id='video'>
            <h2>VIDEOS</h2>
            <div className='video-wrapper'>
            
                <div className='video-container'>
                    { videoData.map(vid => (
                        <VideoCard
                            key={vid.title}
                            name={vid.name}
                            link={vid.link}
                        />
                    )) }
                </div>
                <i 
                    id='video-arrow-l'
                    className='arrow scrollLeft fas fa-chevron-left'
                    onClick={ leftArrowClick }
                >
                </i>
                <i 
                    id='video-arrow-r'
                    className='arrow scrollRight fas fa-chevron-right'
                    onClick={ rightArrowClick }
                    >
                </i>
            </div>
            <GoTo 
                link='https://www.youtube.com/playlist?list=PLAiByoSfF5ZRBNBvbtcBIWWMwZAD52r16'
                name='videos'
                text='WATCH MORE'
                external='true'
            />
            <p className='treat corn'>pop some corn!</p>
        </section>
    );
};