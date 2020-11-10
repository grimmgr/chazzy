import React from 'react';
// import { Component } from 'react';

import { Socials } from './components/Socials/Socials.js';
import { Listen } from './components/Listen';
import { Menu } from './pages/Menu.js';
import { HomePage } from './pages/Home/Home.js';
// import { ShowsPage } from './pages/Shows';
// import { FanArtPage } from './pages/FanArt';
// import { ContactPage } from './pages/Contact';

// import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <main>
            <Menu />
            <HomePage />
            <Listen />
            <Socials />
        </main>
    );
}


export default App;
