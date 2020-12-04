import React, { useState, useEffect } from 'react';
import { useNav } from '../utils/navContext';
import { Event } from '../components/Event';
import { Subscribe } from '../components/Subscribe';
import '../pageStyles/tourStyle.css';
import { NoEvents } from '../components/NoEvents';
import axios from 'axios';

export const Tour = () => {
    const setNavHome = useNav().setNavHome;

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setNavHome(false);

        axios.get('api/tour')
            .then(response => {
                setEvents(response.data);
                // toggleLoading(false);
            })
            .catch(err => console.log(err));
            // setError ?

        return () => setNavHome(true);
    }, []);
    
    
    return (
        <section id='tour'>
            <h2>TOUR</h2>
            <div className='tour-container'>
                { events.length ?
                    <div className='events-card-container'>
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

