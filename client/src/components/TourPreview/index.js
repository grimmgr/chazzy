import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSubscribe } from '../../utils/subscribeContext';
import { useWidth } from '../../utils/widthContext';
import { NoEvents } from '../NoEvents';
import { Event } from '../Event';
import { GoTo } from '../GoTo';
import { Subscribe } from '../Subscribe';
import './tourPreviewStyle.css';
import axios from 'axios';

export const TourPreview = () => {
    const width = useWidth().width;
    const { openSubscribe, setOpenSubscribe } = useSubscribe();
    const [events, setEvents] = useState([]);
    // const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        axios.get('api/tour')
            .then(response => {
                let eventsList;
                if (width < 900) {
                    eventsList = response.data.slice(0, 8);
                } else {
                    eventsList = response.data.slice(0, 9);
                }
                setEvents(eventsList);
                // toggleLoading(false);
            })
            .catch(err => console.log(err));
            // set error ?
    }, [width]);

    // if (loading) {
    //     return <div>loading...</div>
    // }
    
    return (
        <section id='tour-prev'>
            <h2>TOUR</h2>
            { events.length ?
                <div className='events-container'>
                    <div className='events-card-container'>
                        {events.map(event => (
                            <Event
                                key={event.id}
                                city={event.venue.city}
                                country={event.venue.country}
                                venue={event.venue.name}
                                date={event.datetime}
                                tickets={event.offers}
                                url={event.url}
                            />
                        ))}
                    </div>
                    <div data-aos='fade-left'>
                        <GoTo 
                            link={'/tour'}
                            name={'tour'}
                            text={'ALL DATES'}
                        />
                    </div>
                    
                </div>
            :
                <div className='main-no-events'>
                    <p className='nothing'>Nothing planned</p>
                    <p className='at-the'> at the moment...</p>
                    <p className='for-updates'>for updates ...</p>
                </div>
            }
            <div className='shows-img-container'>
            {/* { events.length && */}
                <div className='join-mailing-container' onClick={() => setOpenSubscribe(true)}>
                    <div className='join-mailing'>
                        <p className='join-our'>JOIN OUR</p>
                        <p className='mailing-list'>MAILING LIST</p>
                    </div>
                </div> 
                <img className='shows-img' src='images/shows.jpg' alt='live show' />
            </div> 
            <CSSTransition
                in={openSubscribe}
                classNames='subscribe'
                timeout={200}
                unmountOnExit
                >
                <Subscribe />
            </CSSTransition>
        </section>
    );
};