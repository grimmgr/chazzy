import React from 'react';
// import { Component } from 'react';

import { Listen } from './components/Listen';
import { Menu } from './pages/Menu';
import { HomePage } from './pages/Home';
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
        </main>
    );
}


export default App;
