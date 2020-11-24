import React, { useState, useEffect } from 'react';
import { useAos } from '../../utils/aosContext';
import { NoEvents } from '../NoEvents';
import { Event } from '../Event';
import { GoTo } from '../GoTo';
import './tourPreviewStyle.css';

export const TourPreview = () => {
    const aos = useAos();

    const [events, setEvents] = useState([]);
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.songkick.com/api/3.0/artists/5312223/gigography.json?order=desc&per_page=10&apikey=eRwskBR31ATK6ceV')
            .then(response => response.json())
            .then(data => {
                if (data.resultsPage.results.event) {
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
            <h2 data-aos={ aos.fade_right }>TOUR</h2>
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