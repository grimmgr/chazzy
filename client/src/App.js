import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aos from 'aos';
import { useAdmin } from './utils/adminContext';
import { Main } from './pages/Main';
import { Menu } from './components/Menu';
import { FanArt } from './pages/FanArt';
import { Tour } from './pages/Tour';
import { Admin } from './pages/Admin';
import { AosProvider } from './utils/aosContext';
import { NavProvider } from './utils/navContext';
import { FanArtProvider } from './utils/fanArtContext';


// import logo from './logo.svg';
import './App.css';



export const App = () => {
    const setAdmin = useAdmin().setAdmin;

    useEffect(() => {
        Aos.init({ 
            duration: 1000, 
            easing: "ease-out",
            mirror: false
         });
        const user = localStorage.getItem('user');
        if (user) {
            setAdmin(user);
        };
    }, []);

    return (
        <Router>
            <main>
                <AosProvider>
                    <NavProvider>
                        <Menu />
                        <FanArtProvider>
                            <Route exact path='/' component={Main} />
                            <Route exact path='/fan-art' component={FanArt} />
                        </FanArtProvider>
                        <Route exact path='/tour' component={Tour} />
                        <Route exact path='/tehe' component={Admin} />
                    </NavProvider>
                </AosProvider>
            </main>
        </Router>
    );
};
