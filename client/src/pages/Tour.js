import React, { useEffect } from 'react';
import { useNav } from '../utils/navContext';

export const Tour = () => {
    const setNavHome = useNav().setNavHome;

    useEffect(() => {
        setNavHome(false);
        return () => setNavHome(true);
    }, []);
    
    return (
        <h2>Tour</h2>
    );
};
