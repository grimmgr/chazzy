import React from 'react';
import { Cover } from '../components/Cover';
import { Listen } from '../components/Listen';

export const HomePage = () => {
    return (
        <section id='home'>
            <Listen />
            <Cover />
        </section>
    );
};