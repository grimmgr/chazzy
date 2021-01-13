import React, { useState, useEffect } from 'react';
import { Home } from '../components/Home';
import { Merch } from '../components/Merch';
import { FanArtPreview } from '../components/FanArtPreview';
import { Video } from '../components/Video';
import { TourPreview } from '../components/TourPreview';
import { Contact } from '../components/Contact';
import { useLocation } from 'react-router-dom';



export const Main = () => {
    const location = useLocation();
    const [ openContact, setOpenContact ] = useState(false);
    useEffect(() => {
        if ( location.hash === '#contact') {
            setOpenContact(true);
        } else {
            setOpenContact(false);
        }
        
    }, [location])
    

    return (
        <div className='main-page'>
            <Home />
            <Merch />
            <FanArtPreview />
            <Video />
            <TourPreview />
            <Contact open={openContact} />
        </div>
    )
}

