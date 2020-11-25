import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    const getEmbedLink = (shareLink) => {
        const embedLink = shareLink.trim().split('?')[0] + 'embed';
        return embedLink;
    }
     
    const submitArt = () => {
        if (instaLink) {
            const embedLink = getEmbedLink(instaLink);
            axios.post('/api/fan-art', { 
                embed_link: embedLink,
                verified: false,
                submitted: new Date()
             })
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

    console.log('render fan art page');

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
            
            <div className='art-submit-form'>
                <h3>Submit your art!</h3>
                <form>
                    <label>Shareable link:</label>
                    <input 
                        id='link' 
                        name='link' 
                        type='text' 
                        placeholder='paste here'
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
            {/* <div className='art-note'>
                <p>*If you see your art here and would like it taken down or credited differently, please email us at beltchastity@gmail.com</p>
            </div> */}
        </section>
    );
};