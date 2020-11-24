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
        axios.post('/tehe', {
            username: username,
            password: password
        })
        .then(response => {
            document.getElementById('username').value='';
            document.getElementById('password').value='';
            if (!adminStatus) {
                toggleAdminStatus();
            }
            // window.location.href='/';
        })
        .catch(err => 
            setError(err));
    };

    useEffect(() => {
        console.log(adminStatus);
        setNavHomeFalse();
    })

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
            <button onClick={toggleAdminStatus}>toggle</button>
            { error ? <p>incorrect login</p> : null }
        </div>
    );
};