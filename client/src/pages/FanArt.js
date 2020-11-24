import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArtCard } from '../components/ArtCard';
import { useNav } from '../utils/navContext';
import '../pageStyles/fanArtStyle.css';

export const FanArt = () => {
    const setNavHome = useNav().setNavHome;
    const [fanArt, setFanArt] = useState([]);
    const [instaLink, setInstaLink] = useState('');

    const getEmbedLink = (shareLink) => {
        const embedLink = shareLink.trim().split('?')[0] + 'embed';
        return embedLink;
    }
     
    const submitArt = () => {
        if (instaLink) {
            const embedLink = getEmbedLink(instaLink);
            axios.post('/api/fan-art', { embed_link: embedLink })
            .then(response => console.log(response))
            .catch(err => console.log(err));
        };
    };

    axios.get('/api/fan-art')
    .then(response => setFanArt(response.data))
    .catch(err => console.log(err));

    useEffect(() => {
        setNavHome(false);
        return () => setNavHome(true);
    });

    return (
        <section id='fan-art'>
            <h2>FAN ART</h2>
            <div className='art-container'>
                { fanArt.map(art => (
                    <ArtCard
                    key={art._id}
                    link={art.embed_link}
                    />
                ))}
            </div>
            <div className='form-container'>
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
            </div>
            <div className='art-note'>
                <p>*If you see your art here and would like it taken down or credited differently, please email us at beltchastity@gmail.com</p>
            </div>
        </section>
    );
};