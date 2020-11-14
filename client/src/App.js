import React from 'react';
// import { Component } from 'react';


import { Menu } from './pages/Menu';
import { HomePage } from './pages/Home';
import { MerchPage } from './pages/Merch';
import { ShowsPage } from './pages/Shows';
import { ContactPage } from './pages/Contact';
// import { FanArtPage } from './pages/FanArt';

// import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <main>
            <Menu />
            <HomePage />
            <MerchPage />
            <ShowsPage />
            <ContactPage />
        </main>
    );
}


export default App;