import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { CustomCursor } from './Components/Relume/Shared/CustomCursor';
import { PortfolioBanner } from './Components/Relume/Shared/PortfolioBanner';

const appName = import.meta.env.VITE_APP_NAME || 'Olena Beliavska';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <>
                <CustomCursor />
                <PortfolioBanner />
                <App {...props} />
            </>
        );
    },
    progress: {
        color: '#8A6FA9',
    },
});

