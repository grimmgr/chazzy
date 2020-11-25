import React, { useContext, useState } from 'react';

const FanArtContext = React.createContext();

export const useFanArt = () => {
    return useContext(FanArtContext);
};

export const FanArtProvider = ({ children }) => {
    const [fanArt, setFanArt] = useState([]);
    return (
        <FanArtContext.Provider value={{fanArt, setFanArt}}>
                { children }
        </FanArtContext.Provider>
    );
};