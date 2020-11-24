import React, { useEffect } from 'react';
import { useNavSetFalse } from '../utils/navContext';

export const Tour = () => {
    const setNavHomeFalse = useNavSetFalse();

    useEffect(() => {
        setNavHomeFalse();
    });
    
    return (
        <h2>Tour</h2>
    );
}
