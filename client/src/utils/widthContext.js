import React, { useState, useEffect, useContext } from 'react';

const WidthContext = React.createContext();

export const useWidth = () => {
    return useContext(WidthContext);
}

export const WidthProvider =({ children }) => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 420);

    useEffect(() => {
        let timeoutId = null;
        const reSize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        };
        window.addEventListener('resize', reSize);

        return () => {
            window.removeEventListener('resize', reSize);
        }
    }, []);

    return (
        <WidthContext.Provider value={ { width, setWidth } }>
            { children }
        </WidthContext.Provider>
    )
}