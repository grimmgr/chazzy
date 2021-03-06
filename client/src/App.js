import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAdmin } from './utils/adminContext';
import { Main } from './pages/Main';
import { Menu } from './components/Menu';
import { FanArt } from './pages/FanArt';
import { Tour } from './pages/Tour';
import { Admin } from './pages/Admin';
import { NavProvider } from './utils/navContext';
import { FanArtProvider } from './utils/fanArtContext';
import { WidthProvider } from './utils/widthContext';
import { SubscribeProvider } from './utils/subscribeContext';

import './App.css';
import ScrollToTop from './components/ScrollToTop';



export const App = () => {
    const setAdmin = useAdmin().setAdmin;

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setAdmin(user);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <main>
                <NavProvider>
                    <WidthProvider>
                        <SubscribeProvider>
                            <Menu />
                            <FanArtProvider>
                                <Route exact path='/' component={Main} />
                                <Route exact path='/fan-art' component={FanArt} />
                            </FanArtProvider>
                            <Route exact path='/tour' component={Tour} />
                            <Route exact path='/tehe' component={Admin} />
                        </SubscribeProvider>
                    </WidthProvider>
                </NavProvider>
            </main>
        </Router>
    );
};
