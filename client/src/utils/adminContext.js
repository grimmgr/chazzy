import React, { useContext, useState } from 'react';

const AdminContext = React.createContext();
const AdminUpdateContext = React.createContext();

export const useAdmin = () => {
    return useContext(AdminContext);
};

export const useAdminUpdate = () => {
    return useContext(AdminUpdateContext);
}

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    const toggleAdmin = () => {
        setAdmin(prevAdminStatus => !prevAdminStatus);
    };

    return (
        <AdminContext.Provider value={admin}>
            <AdminUpdateContext.Provider value={toggleAdmin}>
                { children }
            </AdminUpdateContext.Provider>
        </AdminContext.Provider>
    );
};