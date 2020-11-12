import React from 'react';
import { MerchItems } from '../components/MerchItems';

export const MerchPage = () => {
    return (
        <section id='merch'>
            <h2>New Merch!</h2>
            <MerchItems />
            <p><a href='http://chastitybelt.limitedrun.com/store 'target='_blank' rel='noopener noreferrer'>treat yourself ;)</a></p>
        </section>
    );
};