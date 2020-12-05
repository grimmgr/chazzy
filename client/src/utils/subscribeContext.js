import React, { useContext, useState } from 'react';

const SubscribeContext = React.createContext();

export const useSubscribe = () => {
    return useContext(SubscribeContext);
};

export const SubscribeProvider = ({ children }) => {
    const [openSubscribe, setOpenSubscribe] = useState(false);

    return (
        <SubscribeContext.Provider value={{openSubscribe, setOpenSubscribe}}>
            { children }
        </SubscribeContext.Provider>
    );
};