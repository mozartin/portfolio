import React from 'react';
import SeoHead from '../Components/SeoHead';
import FreelanceHubPage from '../Components/Relume/showcase/FreelanceHubPage';

export default function ShowcaseFreelanceHub() {
    return (
        <>
            <SeoHead
                title="FreelanceHub · Case Study"
                description="A freelance marketplace built with React and Laravel — browse jobs, send proposals, and manage work with role-based dashboards."
                path="/showcase/freelancehub"
            />
            <FreelanceHubPage />
        </>
    );
}
