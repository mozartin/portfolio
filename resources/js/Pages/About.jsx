import React from 'react';
import SeoHead from '../Components/SeoHead';
import AboutPage from '../Components/Relume/about/index';

export default function About() {
    return (
        <>
            <SeoHead
                title="About"
                description="Full-stack web developer Olena Beliavska — building modern, responsive websites and web apps from concept and design through to code and deployment."
                path="/about"
            />
            <AboutPage />
        </>
    );
}
