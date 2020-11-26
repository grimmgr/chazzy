import React, { useState, useEffect } from 'react';
import { useNav } from '../utils/navContext';
import { Event } from '../components/Event';
import { Subscribe } from '../components/Subscribe';
import '../pageStyles/tourStyle.css';

export const Tour = () => {
    const setNavHome = useNav().setNavHome;

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setNavHome(false);

        fetch('https://rest.bandsintown.com/v4/artists/chastitybelt/events/?date=2019-12-01,2020-03-01&app_id=062bcc4754fbd4d4106af8bf38bda1c0')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                if (data.length) {
                    setEvents(data);
                }
                // toggleLoading(false);
            });

        return () => setNavHome(true);
    }, []);
    console.log(events);
    
    return (
        <section id='tour'>
            <h2>Tour</h2>
            <div className='tour-container'>
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
            <Subscribe />
        </section>
    );
};

