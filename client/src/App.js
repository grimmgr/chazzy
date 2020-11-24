import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aos from 'aos';
import { useAdmin } from './utils/adminContext';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Merch } from './pages/Merch';
import { TourPreview } from './pages/TourPreview';
import { Subscribe } from './components/Subscribe';
import { Contact } from './pages/Contact';
import { FanArtPreview } from './pages/FanArtPreview';
import { FanArt } from './pages/FanArt';
import { Tour } from './pages/Tour';
import { Admin } from './pages/Admin';
import { AosProvider } from './utils/aosContext';
import { NavProvider } from './utils/navContext';


// import logo from './logo.svg';
import './App.css';



export const App = () => {
    const adminStatus = useAdmin();

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out" });
        console.log(adminStatus)
    }, []);

    return (
        <AosProvider>
            <NavProvider>
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
                        <Route exact path='/tehe'>
                            <Admin />
                        </Route>
                    </Router>
                </main>
            </NavProvider>
        </AosProvider>
    );
};
