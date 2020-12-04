import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import { useAdmin } from '../../utils/adminContext';
import { useFanArt } from '../../utils/fanArtContext';
import './artCardStyle.css';

export const ArtCard = (props) => {
    const [deletePrompt, setDeletePrompt] = useState(false);
    const [verifyPrompt, setVerifyPrompt] = useState(false);
    const [displayOne, setDisplayOne] = useState(false);

    const admin = useAdmin().admin;
    const { fanArt, setFanArt } = useFanArt();

    const clickX = (e) => {
        e.stopPropagation();
        setDeletePrompt(true);
    }

    const clickCheck = (e) => {
        e.stopPropagation();
        setVerifyPrompt(true);
    }

    const chooseDelete = (e) => {
        e.stopPropagation();
        remove(props.id);
    }

    const chooseVerify = (e) => {
        e.stopPropagation();
        verify(props.id, props.email);
    }

    const cancelDelete = (e) => {
        e.stopPropagation();
        setDeletePrompt(false);
    }

    const cancelVerify = (e) => {
        e.stopPropagation();
        setVerifyPrompt(false);
    }

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

    const displayBig = (e) => {
        setDisplayOne(true);
    }

    return (
        <div className='artwork-card-wrapper'>
        <div 
            className={ props.verified ? 'artwork-card' : 'artwork-card not-verified' }
            onClick={ displayBig }
            >
            { admin ? 
            <div className='art-options'>

                <i className="far fa-times-circle x" onClick={ clickX }></i>

                { !props.verified ? <i onClick={ clickCheck } className="far fa-check-circle check"></i> : null }
            </div>
            : null }

            <CSSTransition
                in={deletePrompt}
                timeout={200}
                classNames='prompt'
                unmountOnExit
                >
                <div className='prompt' id='delete-prompt'>
                    <button className='prompt-btn delete' onClick={ chooseDelete }>delete</button>
                    <button className='prompt-btn' onClick={ cancelDelete }>cancel</button> 
                </div>
            </CSSTransition>
            <CSSTransition
                in={verifyPrompt}
                timeout={200}
                classNames='prompt'
                unmountOnExit
                >
                <div className='prompt' id='verify-prompt'>
                    <button className='prompt-btn verify' onClick={ chooseVerify }>verify</button> 
                    <button className='prompt-btn' onClick={ cancelVerify }>cancel</button> 
                </div>
            </CSSTransition>
            <div className='ig-img-container'>
                <img className='ig-thumbnail' src={props.link} alt='instagram post' />
            </div>
           
        </div>
        <CSSTransition
                in={displayOne}
                timeout={400}
                classNames={'big-display'}
                unmountOnExit
                >
            
                <div className='big-display'>
                    <div className='big-display-container'>
                    <div className='close-display-container'>
                        <div className='close-display-btn' onClick={() => setDisplayOne(false)}>
                            <span className='left-display'></span>
                            <span className='right-display'></span>
                        </div>
                    </div>
                    <div className='display-card'>
                        <iframe className='display-iframe' src={props.embedLink} frameBorder="0" scrolling="no" allowtransparency="true" title="title"></iframe>
                    </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};