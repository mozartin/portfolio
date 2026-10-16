import React from 'react';
import SeoHead from '../Components/SeoHead';
import PoprockPage from '../Components/Relume/showcase/PoprockPage';

export default function ShowcasePoprock() {
    return (
        <>
            <SeoHead
                title="Pop/Rock Avenue · Case Study"
                description="A high-energy booking site for an 8-piece cover band — dark neon UI, multilingual content, and clear calls to check availability."
                path="/showcase/poprock-avenue"
            />
            <PoprockPage />
        </>
    );
}
