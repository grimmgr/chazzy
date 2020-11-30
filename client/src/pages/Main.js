import React from 'react';
import { Home } from '../components/Home';
import { Merch } from '../components/Merch';
import { FanArtPreview } from '../components/FanArtPreview';
import { Video } from '../components/Video';
import { TourPreview } from '../components/TourPreview';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';



export const Main = () => {
    return (
        <>
            <Home />
            <Merch />
            <FanArtPreview />
            <Video />
            <TourPreview />
            <Subscribe />
            <Contact />
        </>
    )
}

