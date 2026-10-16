import React from 'react';
import SeoHead from '../Components/SeoHead';
import ShowcasePage from '../Components/Relume/showcase/index';

export default function Showcase() {
    return (
        <>
            <SeoHead
                title="Work"
                description="Selected projects by Olena Beliavska — client sites and full-stack web apps designed and built from the ground up."
                path="/showcase"
            />
            <ShowcasePage />
        </>
    );
}
