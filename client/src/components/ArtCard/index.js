import React from 'react';
import axios from 'axios';
import { useAdmin } from '../../utils/adminContext';
import { useFanArt } from '../../utils/fanArtContext';
import './artCardStyle.css';

export const ArtCard = (props) => {
    const admin = useAdmin().admin;
    const { fanArt, setFanArt } = useFanArt();

    const remove = (id) => {
        axios.delete('api/fan-art/' + id)
        .then(response => {
            const newFanArt = fanArt.filter(art => art._id !== id);
            setFanArt(newFanArt);
        })
    }

    const verify = (id) => {
        console.log(`verify ${id}`);
        axios.put('api/fan-art/' + id, { verified: true })
        .then((response) => {
            console.log(response.data);
            const otherOnes = fanArt.filter(art => art._id !== id);
            const newFanArt = [...otherOnes, {...response.data, verified: true}];
            newFanArt.sort((a, b) => {
                return new Date(b.submitted) - new Date(a.submitted);
            });
            console.log('card')
            console.log(newFanArt);
            setFanArt(newFanArt);
        });
    };

    return (
        <div className={ props.verified ? 'artwork-card' : 'artwork-card not-verified' }>
            { admin ? 
            <div className='art-options'>

                <i className="far fa-times-circle x" onClick={() => remove(props.id)}></i>

                { !props.verified ? <i onClick={() => verify(props.id)} className="far fa-check-circle check"></i> : null }
            </div>
            : null }

            <div className='ig-img-container'>
                <img className='ig-thumbnail' src={props.link} alt='instagram post' />
            </div>

        </div>
    );
};