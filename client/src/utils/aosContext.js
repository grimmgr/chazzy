import React, { useContext, useState } from 'react';

const AosContext = React.createContext();

export const useAos = () => {
    return useContext(AosContext);
};

export const AosProvider = ({ children }) => {
    const [aos, setAos] = useState({
        fade_right: 'fade-right',
        fade_left: 'fade-left',
        fade_up: 'fade-up'
    });

    return (
        <AosContext.Provider value={aos}>
            { children }
        </AosContext.Provider>
    );
};