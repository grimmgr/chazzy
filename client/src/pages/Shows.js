import React, { useState, useEffect } from 'react';
import { NoEvents } from '../components/NoEvents';
import { Event } from '../components/Event';
import { GoTo } from '../components/GoTo';
import '../pageStyles/showsStyle.css';

export const ShowsPage = () => {
    // 5312223 cb
    // 9078614 ag

    const [events, setEvents] = useState([]);
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.songkick.com/api/3.0/artists/5312223/gigography.json?order=desc&per_page=10&apikey=eRwskBR31ATK6ceV')
            .then(response => response.json())
            .then(data => {
                if (data.resultsPage.results.event) {
                    console.log(data);
                    setEvents(data.resultsPage.results.event);
                }
                toggleLoading(false);
            });
    }, []);

    if (loading) {
        return <div>loading...</div>
    }
    
    return (
        <section id='shows'>
            { console.log(events) }
            <h2>SHOWS</h2>
            { events.length ?
                <div className='events-container'>
                        {events.map(show => (
                            <Event
                                key={show.id}
                                city={show.location.city}
                                venue={show.venue.displayName}
                                date={show.start.datetime}
                                uri={show.uri}
                            />
                        ))}
                    <GoTo 
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