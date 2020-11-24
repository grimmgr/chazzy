import React, { useEffect, useState } from 'react';
import { useAdmin, useAdminUpdate } from '../utils/adminContext';
import { useNavSetFalse } from '../utils/navContext';
import axios from 'axios';

export const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const adminStatus = useAdmin();
    const toggleAdminStatus = useAdminUpdate();
    const setNavHomeFalse = useNavSetFalse();

    const login = (e) => {
        
        e.preventDefault();
        console.log('button clicked');
        axios.post('/tehe', {
            username: username,
            password: password
        })
        .then(response => {
            localStorage.setItem('user', response.data.username);
            // if (!adminStatus) {
            //     toggleAdminStatus();
            // }
            setUsername('');
            setPassword('');
        })
        .catch(err => 
            setError(err));
    };

    useEffect(() => {
        setNavHomeFalse();
    });

    return (
        <div>
            <h2>Just the gals...</h2>
            <input 
                id='username'
                placeholder='username' 
                value={username}
                onChange={ e => setUsername(e.target.value) }
            />
            <input 
                id='password'
                type='password'
                placeholder='password' 
                value={password}
                onChange={ e => setPassword(e.target.value) }
            />
            <button
                onClick={login}
                >LOGIN</button>
            { error && !adminStatus ? <p>incorrect login</p> : null }
            { adminStatus ? <p>welcome</p> : null}
        </div>
    );
};