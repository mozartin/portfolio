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
                regular: ['Castoro', 'serif'],      
                heading: ['Castoro Titling', 'serif'],         
            },
            colors: {
                'primary-bg': '#E4EFEE',
                'secondary-bg': '#F9F3F6',
                'third-bg': '#3D9A8C',
                'text-primary': '#07080B',
                'button-primary': '#5DBBA8',
                'lavender': '#B8A4D6',
                'purple': '#7C5CB8',
                'mist': '#F3F0F6',
                'plum': '#372C43',
                'plum-bg': '#2E2440',
                'blush': '#FDF2F8',
            },
        },
    },
    plugins: [],
};
