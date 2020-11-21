import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Menu } from './pages/Menu';
import { HomePage } from './pages/Home';
import { MerchPage } from './pages/Merch';
import { ShowsPage } from './pages/Shows';
import { Subscribe } from './components/Subscribe';
import { ContactPage } from './pages/Contact';
import { FanArtPage } from './pages/FanArt';
import { Tour } from './pages/Tour';

// import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <main>
            <Router>
                <Menu />
                <Route exact path='/'>
                    <HomePage />
                    <MerchPage />
                    <ShowsPage />
                    <FanArtPage />
                    <Subscribe />
                    <ContactPage />
                </Route>
                <Route exact path='/tour'>
                    <Tour />
                </Route>
            </Router>
        </main>
    );
}


export default App;
