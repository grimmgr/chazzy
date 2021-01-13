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

    // const getIgInfo = async (post) => {
    //     const response = await axios.get('/api/ig/' + post);
    //     const postInfo = response.data;
    //     return postInfo;
    // }
    
    const submitArt = async (e) => {
        e.preventDefault();
        if ( instaLink ) {
            let artInfo;
            const embedLink = getEmbedLink(instaLink);
            const postID = getPostID(instaLink);
            // const { author, cdn } = await getIgInfo(post);
            if ( admin ) {
                artInfo = {
                    // cdn: cdn,
                    post_ID: postID,
                    embed_link: embedLink,
                    email: null,
                    verified: true,
                    submitted: new Date()
                }
            } else {
                artInfo = {
                    // cdn: cdn,
                    post_ID: postID,
                    embed_link: embedLink,
                    email: email,
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
            <div className='open-form-container'>
                <div className='open-form-btn' onClick={() => setOpenForm(true)} >
                    <p>{ admin ? 'ADD ART' : 'ADD YOUR ART TO OUR COLLECTION!'}</p>
                </div>
                
            </div>
            
            <div className='art-container'>
                { fanArt.map(art => (
                    <ArtCard
                    key={art._id}
                    id={art._id}
                    post={art.post_ID}
                    embedLink={art.embed_link}
                    email={art.email}
                    verified={art.verified}
                    />
                ))}
            </div>
            
           
                <CSSTransition
                    in={openForm}
                    timeout={200}
                    unmountOnExit
                    classNames={'big-display'}
                >
                    <div className='big-display'>
                        
                        <div id='art-form-container' className='big-display-container'>
                            <div className='close-display-container'>
                                <div className='close-display-btn' onClick={() => setOpenForm(false)} >
                                    <span className='left-display'></span>
                                    <span className='right-display'></span>
                                </div>
                            </div>
                            <form className='submit-form '>
                                <div className='form-inputs'>
                                <label htmlFor='link'>Paste a link to your instagram post!</label>
                                <input 
                                    id='link' 
                                    name='link' 
                                    type='text' 
                                    placeholder='paste link'
                                    value={instaLink}
                                    onChange={ event => setInstaLink(event.target.value) }
                                    />
                                <label htmlFor='email'>We'll email you when it's up ;)</label>
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
                                    <p className= 'submit-text'>SUBMIT</p>
                                </button>
                                
                                </form>

                                { error ? <p>please use a valid sharing link</p>
                                : null }
                        </div>
                    </div>
                </CSSTransition>
           
            <div className='smiley-banner'></div>
        </section>
    );
};