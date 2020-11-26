import React, { useState, useEffect } from 'react';
import { useAos } from '../../utils/aosContext';
import { NoEvents } from '../NoEvents';
import { Event } from '../Event';
import { GoTo } from '../GoTo';
import './tourPreviewStyle.css';

export const TourPreview = () => {
    const aos = useAos();

    const [events, setEvents] = useState([]);
    // const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        const url = 'https://rest.bandsintown.com/v4/artists/chastitybelt/events/?date=2019-12-01,2020-03-01&app_id=062bcc4754fbd4d4106af8bf38bda1c0';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length) {
                    setEvents(data.slice(0, 10));
                }
                // toggleLoading(false);
            });
    }, []);

    // if (loading) {
    //     return <div>loading...</div>
    // }
    
    return (
        <section id='tour-prev'>
            <h2>TOUR</h2>
            { events.length ?
                <div className='events-container'>
                        {events.map(event => (
                            <Event
                                key={event.id}
                                city={event.venue.city}
                                country={event.venue.country}
                                venue={event.venue.name}
                                timezone={event.venue.timezone}
                                date={event.datetime}
                                tickets={event.offers}
                                url={event.url}
                            />
                        ))}
                    <GoTo 
                        data-aos={ aos.fade_left }
                        link={'/tour'}
                        name={'tour'}
                        text={'ALL DATES'}
                    />
                </div>
            : <NoEvents />
            }
            <div className='shows-img-container'>
                <img src='images/shows.jpg' alt='live show' />
            </div>
        </section>
    );
};