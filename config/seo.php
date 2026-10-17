<?php

$siteName = env('APP_NAME', 'Olena Beliavska');
// Square logo thumb — text lives in og:title / og:description, not in the image.
// Versioned filename (no ?v=) — Telegram often fails on query strings in og:image.
$defaultImage = '/images/og-logo-v3.jpg';
$defaultDescription = 'Web developer Olena Beliavska — designing and building modern, memorable websites. Design · Code · Experience.';

return [
    'site_name' => $siteName,
    // Empty = no query string on og:image (safer for Telegram).
    'image_version' => null,
    'image_width' => 800,
    'image_height' => 800,
    // "summary" = small square thumb + text (not the large banner).
    'twitter_card' => 'summary',
    'default' => [
        'title' => $siteName.' · Web Developer',
        'description' => $defaultDescription,
        'image' => $defaultImage,
    ],
    'pages' => [
        'home' => [
            'title' => $siteName.' · Web Developer',
            'description' => 'From idea to a website worth remembering. Olena Beliavska designs and builds modern, responsive websites — Design · Code · Experience.',
            'image' => $defaultImage,
            'priority' => '1.0',
            'changefreq' => 'weekly',
        ],
        'about' => [
            'title' => 'About · '.$siteName,
            'description' => 'Full-stack web developer Olena Beliavska — building modern, responsive websites and web apps from concept and design through to code and deployment.',
            'image' => $defaultImage,
            'priority' => '0.8',
            'changefreq' => 'monthly',
        ],
        'services' => [
            'title' => 'Services · '.$siteName,
            'description' => 'Websites and web apps for freelancers, small businesses, and custom projects — from a focused landing page to a full React + Laravel build.',
            'image' => $defaultImage,
            'priority' => '0.8',
            'changefreq' => 'monthly',
        ],
        'contact' => [
            'title' => 'Contact · '.$siteName,
            'description' => 'Have a project in mind? Get in touch with Olena Beliavska to talk about your next website or web application.',
            'image' => $defaultImage,
            'priority' => '0.6',
            'changefreq' => 'yearly',
        ],
        'showcase' => [
            'title' => 'Work · '.$siteName,
            'description' => 'Selected projects by Olena Beliavska — client sites and full-stack web apps designed and built from the ground up.',
            'image' => $defaultImage,
            'priority' => '0.9',
            'changefreq' => 'weekly',
        ],
        'showcase.freelancehub' => [
            'title' => 'FreelanceHub · Case Study · '.$siteName,
            'description' => 'A freelance marketplace built with React and Laravel — browse jobs, send proposals, and manage work with role-based dashboards.',
            'image' => $defaultImage,
            'priority' => '0.7',
            'changefreq' => 'monthly',
        ],
        'showcase.poprock' => [
            'title' => 'Pop/Rock Avenue · Case Study · '.$siteName,
            'description' => 'A high-energy booking site for an 8-piece cover band — dark neon UI, multilingual content, and clear calls to check availability.',
            'image' => $defaultImage,
            'priority' => '0.7',
            'changefreq' => 'monthly',
        ],
    ],
];
