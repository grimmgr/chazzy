import React, { useState } from 'react';
import axios from 'axios';

export const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        axios.post('/tehe', {
            username: username,
            password: password
        })
        .then(response => console.log(response))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Just the gals...</h2>
            <input 
                placeholder='username' 
                value={username}
                onChange={ e => setUsername(e.target.value) }
            />
            <input 
                placeholder='password' 
                value={password}
                onChange={ e => setPassword(e.target.value) }
            />
            <button
                onClick={login}
            >LOGIN</button>
        </div>
    );
};