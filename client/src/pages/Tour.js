import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSubscribe } from '../utils/subscribeContext';
import { useNav } from '../utils/navContext';
import { Event } from '../components/Event';
import { Subscribe } from '../components/Subscribe';
import '../pageStyles/tourStyle.css';
import { NoEvents } from '../components/NoEvents';
import axios from 'axios';

export const Tour = () => {
    const setNavHome = useNav().setNavHome;
    const { openSubscribe, setOpenSubscribe } = useSubscribe();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setNavHome(false);

        axios.get('api/tour')
            .then(response => {
                setEvents(response.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
            // setError ?

        return () => setNavHome(true);
    }, []);
    
    
    return (
        <section id='tour'>
            <h2>TOUR</h2>
            <div className='tour-open-subscribe-container'>
                <p className='never'>never miss a show...</p>
                <div className='tour-open-subscribe' onClick={() => setOpenSubscribe(true)}>
                    <p>JOIN OUR MAILING LIST</p>
                </div>
            </div>
            { loading ? 
                <div><p className='loading'>\m/</p></div>
            :
            
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
                : <div className='tour-no-events'>
                        <div className='resting-container'>
                            <p className='resting'>resting...</p>
                            <p className='brb'>brb</p>
                        </div>
                  </div> }
            </div> }
                    
            
            <CSSTransition
                in={openSubscribe}
                classNames='subscribe'
                timeout={200}
                unmountOnExit
                >
                <Subscribe />
            </CSSTransition>
            <div className='smiley-banner'></div>
        </section>
    );
};

