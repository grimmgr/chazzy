import React from 'react';
import { Home } from '../components/Home';
import { Merch } from '../components/Merch';
import { TourPreview } from '../components/TourPreview';
import { FanArtPreview } from '../components/FanArtPreview';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';



export const Main = () => {
    return (
        <>
            <Home />
            <Merch />
            <FanArtPreview />
            <TourPreview />
            <Subscribe />
            <Contact />
        </>
    )
}

