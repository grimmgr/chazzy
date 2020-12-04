import React, { useState, useEffect } from 'react';
import { NoEvents } from '../NoEvents';
import { Event } from '../Event';
import { GoTo } from '../GoTo';
import './tourPreviewStyle.css';
import axios from 'axios';

export const TourPreview = () => {

    const [events, setEvents] = useState([]);
    // const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        axios.get('api/tour')
            .then(response => {
                setEvents(response.data.slice(0, 8));
                // toggleLoading(false);
            })
            .catch(err => console.log(err));
            // set error ?
    }, []);

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
                    <img className='shows-img' src='images/shows.jpg' alt='live show' />
                </div>
            : <NoEvents />
            }
            
           
            
        </section>
    );
};