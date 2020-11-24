import React, { useContext, useState } from 'react';

const NavContext = React.createContext();
const NavSetTrueContext = React.createContext();
const NavSetFalseContext = React.createContext();

export const useNav = () => {
    return useContext(NavContext);
};

export const useNavSetTrue = () => {
    return useContext(NavSetTrueContext);
};

export const useNavSetFalse = () => {
    return useContext(NavSetFalseContext);
};

export const NavProvider = ({ children }) => {
    const [navHome, setNavHome] = useState(true);

    const setNavHomeTrue = () => {
        setNavHome(true);
    };

    const setNavHomeFalse = () => {
        setNavHome(false);
    };

    return (
        <NavContext.Provider value={navHome}>
            <NavSetTrueContext.Provider value={setNavHomeTrue}>
                <NavSetFalseContext.Provider value={setNavHomeFalse}>
                    { children }
                </NavSetFalseContext.Provider>
            </NavSetTrueContext.Provider>
        </NavContext.Provider>
    );
};