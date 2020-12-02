import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import { useAdmin } from '../../utils/adminContext';
import { useFanArt } from '../../utils/fanArtContext';
import './artCardStyle.css';

export const ArtCard = (props) => {
    const [deletePrompt, setDeletePrompt] = useState(false);
    const [verifyPrompt, setVerifyPrompt] = useState(false);

    const admin = useAdmin().admin;
    const { fanArt, setFanArt } = useFanArt();

    const remove = (id) => {
        axios.delete('api/fan-art/' + id)
        .then(response => {
            const newFanArt = fanArt.filter(art => art._id !== id);
            setDeletePrompt(false);
            setFanArt(newFanArt);
        })
    }

    const verify = (id, email) => {
        axios.put('api/fan-art/' + id, { email: email })
        .then((response) => {
            const otherOnes = fanArt.filter(art => art._id !== id);
            const newFanArt = [...otherOnes, {...response.data, verified: true}];
            newFanArt.sort((a, b) => {
                return new Date(b.submitted) - new Date(a.submitted);
            });
            setVerifyPrompt(false);
            setFanArt(newFanArt);
        });
    };

    return (
        <div className={ props.verified ? 'artwork-card' : 'artwork-card not-verified' }>
            { admin ? 
            <div className='art-options'>

                <i className="far fa-times-circle x" onClick={() => setDeletePrompt(true)}></i>

                { !props.verified ? <i onClick={() => setVerifyPrompt(true)} className="far fa-check-circle check"></i> : null }
            </div>
            : null }

            <CSSTransition
                in={deletePrompt}
                timeout={200}
                classNames='prompt'
                unmountOnExit
                >
                <div className='prompt' id='delete-prompt'>
                    <button className='prompt-btn delete' onClick={() => remove(props.id)}>delete</button>
                    <button className='prompt-btn' onClick={() => setDeletePrompt(false)}>cancel</button> 
                </div>
            </CSSTransition>
            <CSSTransition
                in={verifyPrompt}
                timeout={200}
                classNames='prompt'
                unmountOnExit
                >
                <div className='prompt' id='verify-prompt'>
                    <button className='prompt-btn verify' onClick={() => verify(props.id, props.email)}>verify</button> 
                    <button className='prompt-btn' onClick={() => setVerifyPrompt(false)}>cancel</button> 
                </div>
            </CSSTransition>

            <div className='ig-img-container'>
                <img className='ig-thumbnail' src={props.link} alt='instagram post' />
            </div>

        </div>
    );
};