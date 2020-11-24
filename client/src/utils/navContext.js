import React, { useContext, useState } from 'react';

const NavContext = React.createContext();

export const useNav = () => {
    return useContext(NavContext);
};

export const NavProvider = ({ children }) => {
    const [navHome, setNavHome] = useState(true);

    return (
        <NavContext.Provider value={{navHome, setNavHome}}>
            { children }
        </NavContext.Provider>
    );
};