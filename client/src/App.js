import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Merch } from './pages/Merch';
import { TourPreview } from './pages/TourPreview';
import { Subscribe } from './components/Subscribe';
import { Contact } from './pages/Contact';
import { FanArtPreview } from './pages/FanArtPreview';
import { FanArt } from './pages/FanArt';
import { Tour } from './pages/Tour';

// import logo from './logo.svg';
import './App.css';


export const App = () => {
    return (
        <main>
            <Menu />
            <Router>
                <Route exact path='/'>
                    <Home />
                    <Merch />
                    <TourPreview />
                    <FanArtPreview />
                    <Subscribe />
                    <Contact />
                </Route>
                <Route exact path='/tour'>
                    <Tour />
                </Route>
                <Route exact path='/fan-art'>
                    <FanArt />
                </Route>
            </Router>
        </main>
    );
};
