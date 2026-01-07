import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-bg': '#E1EDEC',
                'secondary-bg': '#F9F3F6',
                'third-bg': '#558480',
                'text-primary': '#07080B',
                'button-primary': '#C48DAA',
            },
        },
    },
    plugins: [],
};

