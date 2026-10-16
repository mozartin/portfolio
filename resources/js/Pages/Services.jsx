import React from 'react';
import SeoHead from '../Components/SeoHead';
import ServicesPage from '../Components/Relume/services/index';

export default function Services() {
    return (
        <>
            <SeoHead
                title="Services"
                description="Websites and web apps for freelancers, small businesses, and custom projects — from a focused landing page to a full React + Laravel build."
                path="/services"
            />
            <ServicesPage />
        </>
    );
}
