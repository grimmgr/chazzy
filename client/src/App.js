import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Socials } from './components/Socials';
import { Listen } from './/components/Listen';
import { HomePage } from './pages/Home';
import { ShowsPage } from './pages/Shows';
import { MusicPage } from './pages/Music';
import { FanArtPage } from './pages/FanArt';
import { ContactPage } from './pages/Contact';

// import logo from './logo.svg';
// import './App.css';


const App = () => {
    return (
        
        <Router>
            <main>
                <Nav />
                <Route exact path='/' component={ HomePage } />
                <Route exact path='/shows' component={ ShowsPage } />
                <Route exact path='/music' component={ MusicPage } />
                <Route exact path='/fan-art' component={ FanArtPage } />
                <Route exact path='/contact' component={ ContactPage } />
                <Listen />
                <Socials />
            </main>
        </Router>
        
    );
}


export default App;
