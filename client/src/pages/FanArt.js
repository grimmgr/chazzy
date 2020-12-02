import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { ArtCard } from '../components/ArtCard';
import { useNav } from '../utils/navContext';
import { useAdmin } from '../utils/adminContext';
import { useFanArt } from '../utils/fanArtContext';
import '../pageStyles/fanArtStyle.css';

export const FanArt = () => {
    const setNavHome = useNav().setNavHome;
    const admin = useAdmin().admin;
    const { fanArt, setFanArt } = useFanArt();
    const [instaLink, setInstaLink] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [openForm, setOpenForm] = useState(false);

    const getEmbedLink = (shareLink) => {
        const embedLink = shareLink.trim().split('?')[0] + 'embed';
        return embedLink;
    }

    const getPostID = (link) => {
        const postID = link.trim().split('/')[4];
        return postID;
    }

    const getIgInfo = async (post) => {
        console.log('getIgInfo input:' + post);
        const response = await axios.get('/api/ig/' + post);
        const postInfo = response.data;
        console.log('getIgInfo output:' + postInfo);
        return postInfo;
    }
    
    const submitArt = async (e) => {
        e.preventDefault();
        if ( instaLink ) {
            let artInfo;
            const embedLink = getEmbedLink(instaLink);
            const post = getPostID(instaLink);
            const { author, cdn } = await getIgInfo(post);
            if ( admin ) {
                artInfo = {
                    cdn: cdn,
                    embed_link: embedLink,
                    email: null,
                    author: author,
                    verified: true,
                    submitted: new Date()
                }
            } else {
                artInfo = {
                    cdn: cdn,
                    embed_link: embedLink,
                    email: email,
                    author: author,
                    verified: false,
                    submitted: new Date()
                }
            }
            axios.post('/api/fan-art', artInfo)
            .then(() => {
                setEmail('');
                setInstaLink('');
                setOpenForm(false);
            })
            .catch(err => setError(err));
        };
    };

    useEffect(() => {
        setNavHome(false);
        return () => setNavHome(true);
    }, []);

    useEffect(() => {
        axios.get('/api/fan-art')
        .then(response => {
            if (admin) {
                setFanArt(response.data);
            } else {
                const art = response.data.filter(art => art.verified === true);
                setFanArt(art);
            }
        })
        .catch(err => console.log(err));
    }, [admin, openForm]);

    return (
        <section id='fan-art'>
            <h2>FAN ART</h2>
            
            <div className='art-container'>
                { fanArt.map(art => (
                    <ArtCard
                    key={art._id}
                    id={art._id}
                    link={art.cdn}
                    email={art.email}
                    verified={art.verified}
                    />
                ))}
            </div>
            
            <div className='art-form-wrapper'>
                <CSSTransition
                    in={!openForm}
                    timeout={500}
                    unmountOnExit
                    classNames={'open-form-btn'}
                >
                    <div className='open-form-container'>
                    <div className='open-form-btn' onClick={() => setOpenForm(true)} >
                        <h3>{ admin ? 'add art' : 'submit yours!'}</h3>
                    </div>
                    <p>*If your art is here and you'd like it taken down  email us at beltchastity@gmail.com</p>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={openForm}
                    timeout={500}
                    unmountOnExit
                    classNames={'art-form-container'}
                >
                    <div className='art-form-container'>
                        <h1 className='art-love'>WE <span className='heart'>&hearts;</span> YOUR <br/> ART <br/> !</h1>
                        <div className='close-form-btn' onClick={() => setOpenForm(false)}>
                            <span className='left'></span>
                            <span className='right'></span>
                        </div>
                        <form className='submit-form'>
                            <div className='form-inputs'>
                            <label htmlFor='link'>Paste a link to your instagram post:</label>
                            <input 
                                id='link' 
                                name='link' 
                                type='text' 
                                placeholder='instaaaaa'
                                value={instaLink}
                                onChange={ event => setInstaLink(event.target.value) }
                                />
                            <label htmlFor='email'>We'll email you when it's up:</label>
                            <input 
                                id='email' 
                                name='email' 
                                type='text' 
                                placeholder='email (optional)'
                                value={email}
                                onChange={ event => setEmail(event.target.value) }
                                />
                            </div>
                            <button id='submit-art-btn' onClick={submitArt}>
                                <img className='submit-smiley' src='./images/smiley_multi.png' alt='smiley face' />
                                <p className= 'submit-text'>submit</p>
                            </button>
                            </form>
                                { error ? <p>please use a valid sharing link</p>
                        : null }
                        
                    </div>
                </CSSTransition>
            </div>
        </section>
    );
};