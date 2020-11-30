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
    const [error, setError] = useState('');
    const [openForm, setOpenForm] = useState(false);

    const getEmbedLink = (shareLink) => {
        const embedLink = shareLink.trim().split('?')[0] + 'embed';
        return embedLink;
    }
     
    const submitArt = (e) => {
        e.preventDefault();
        if ( instaLink ) {
            let artInfo;
            const embedLink = getEmbedLink(instaLink);
            if ( admin ) {
                artInfo = {
                    embed_link: embedLink,
                    verified: true,
                    submitted: new Date()
                }
            } else {
                artInfo = {
                    embed_link: embedLink,
                    verified: false,
                    submitted: new Date()
                }
            }
            axios.post('/api/fan-art', artInfo)
            .then(response => console.log(response))
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
    }, [admin]);

    return (
        <section id='fan-art'>
            <h2>FAN ART</h2>
            
            <div className='art-container'>
                { fanArt.map(art => (
                    <ArtCard
                    key={art._id}
                    _id={art._id}
                    link={art.embed_link}
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
                        <h3>{ admin ? 'add art' : 'Submit yours!'}</h3>
                    </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={openForm}
                    timeout={500}
                    unmountOnExit
                    classNames={'art-form-container'}
                >
                    <div className='art-form-container'>
                        <div className='close-form-btn' onClick={() => setOpenForm(false)}>
                            <span class='left'></span>
                            <span class='right'></span>
                        </div>
                        <form>
                            <p>We'd love to have your art on our page!</p> 
                            <p>To share with us, paste a link to your instagram post below.  Check back in a day or two and we'll have it posted on our site ;)</p>
                            <input 
                                id='link' 
                                name='link' 
                                type='text' 
                                placeholder='paste link here'
                                value={instaLink}
                                onChange={ event => setInstaLink(event.target.value) }
                                />
                            <input 
                                className='submit-art-btn' 
                                type='submit' 
                                value='submit'
                                onClick={submitArt}/>
                        </form>
                        { error ? <p>please use a valid sharing link</p>
                        : null }
                    </div>
                </CSSTransition>
            </div>
            {/* <div className='art-note'>
                <p>*If you see your art here and would like it taken down or credited differently, please email us at beltchastity@gmail.com</p>
            </div> */}
        </section>
    );
};