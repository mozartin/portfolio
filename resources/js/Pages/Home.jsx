import React from 'react';
import SeoHead from '../Components/SeoHead';
import HomePage from '../Components/Relume/home/index';

export default function Home() {
    return (
        <>
            <SeoHead
                title="Olena Beliavska · Web Developer"
                description="From idea to a website worth remembering. Olena Beliavska designs and builds modern, responsive websites — Design · Code · Experience."
                path="/"
            />
            <HomePage />
        </>
    );
}
