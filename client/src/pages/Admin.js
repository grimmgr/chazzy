import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAdmin } from '../utils/adminContext';
import { useNav } from '../utils/navContext';
import axios from 'axios';
import '../pageStyles/adminStyle.css';

export const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [openLogin, setOpenLogin] = useState(false);
    const setNavHome = useNav().setNavHome;

    const {admin, setAdmin} = useAdmin();

    const login = (e) => {
        e.preventDefault();
        axios.post('/tehe', {
            username: username,
            password: password
        })
        .then(response => {
            localStorage.setItem('user', response.data.username);
            setAdmin(response.data.username);
            setUsername('');
            setPassword('');
            window.location.assign('/');

        })
        .catch(err => 
            setError(err));
    };

    useEffect(() => {
        setNavHome(false);
        return () => setNavHome(true);
    }, []);

    return (
        <section id='admin-page'>
            { admin ? <h2>welcome back ;)</h2> :  
            <div>
            <div className='hmmm' onClick={() => setOpenLogin(true)}></div>
            <CSSTransition
                in={openLogin}
                timeout={500}
                unmountOnExit
                classNames='login'
            >
                <div className='login'>
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
                        className='login-btn'
                        onClick={login}
                        >LOGIN</button>
                    { error && <p className='login-msg'>incorrect login</p> }
                    
                </div>
            </CSSTransition> 
            </div> }
        </section>
    );
};