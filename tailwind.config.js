import defaultTheme from 'tailwindcss/defaultTheme';
import relumeTailwind from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.tsx',
        './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
    ],
    presets: [relumeTailwind],
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
