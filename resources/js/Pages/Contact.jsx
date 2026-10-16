import React from 'react';
import SeoHead from '../Components/SeoHead';
import ContactPage from '../Components/Relume/contact/index';

export default function Contact() {
    return (
        <>
            <SeoHead
                title="Contact"
                description="Have a project in mind? Get in touch with Olena Beliavska to talk about your next website or web application."
                path="/contact"
            />
            <ContactPage />
        </>
    );
}
