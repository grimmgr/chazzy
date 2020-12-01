import React, { useState, useEffect } from 'react';
import { useNav } from '../utils/navContext';
import { Event } from '../components/Event';
import { Subscribe } from '../components/Subscribe';
import '../pageStyles/tourStyle.css';
import { NoEvents } from '../components/NoEvents';

export const Tour = () => {
    const setNavHome = useNav().setNavHome;

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setNavHome(false);

        fetch('https://rest.bandsintown.com/v4/artists/chastitybelt/events/?date=past&app_id=062bcc4754fbd4d4106af8bf38bda1c0')
            .then(response => response.json())
            .then(data => {
                if (data.length) {
                    setEvents(data);
                }
                // toggleLoading(false);
            });

        return () => setNavHome(true);
    }, []);
    // console.log(events);
    
    return (
        <section id='tour'>
            <h2>TOUR</h2>
            <div className='tour-container'>
                { events.length ?
                    <div>
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
                    </div>
                : <NoEvents /> }
            </div>
            <div className='tour-page-subscribe'>
                <Subscribe />
            </div>
        </section>
    );
};

