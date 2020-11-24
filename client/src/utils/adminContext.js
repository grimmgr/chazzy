import React, { useContext, useState } from 'react';

const AdminContext = React.createContext();

export const useAdmin = () => {
    return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
                { children }
        </AdminContext.Provider>
    );
};