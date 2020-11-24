import React, { useEffect, useState } from 'react';
import { useAdmin } from '../utils/adminContext';
import { useNav } from '../utils/navContext';
import axios from 'axios';

export const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const setNavHome = useNav().setNavHome;

    const {admin, setAdmin} = useAdmin();

    const login = (e) => {
        
        e.preventDefault();
        console.log('button clicked');
        axios.post('/tehe', {
            username: username,
            password: password
        })
        .then(response => {
            localStorage.setItem('user', response.data.username);
            setAdmin(response.data.username);
            setUsername('');
            setPassword('');
        })
        .catch(err => 
            setError(err));
    };

    useEffect(() => {
        setNavHome(false);
        return () => setNavHome(true);
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
            { error && admin ? <p>incorrect login</p> : null }
            { admin ? <p>welcome</p> : null}
        </div>
    );
};