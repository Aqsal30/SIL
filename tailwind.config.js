import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

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
                lato: ['Lato', 'sans-serif'],
                metro: ['Metrophobic', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif']
            },
            colors: {
                back: "#212529",
                skor: "#0B0C14",
                atas: "#00072D",
                kursi: "#5D737E",
                biru: "#0582B8",
                ijo: "#3FD162"
            },
            height: {
                100: '100px',
                200: '200px',
                250: '250px'
            },
            width: {
                100: '100px',
                200: '200px',
                250: '250px'
            }

        },
    },

    plugins: [forms, require('daisyui')],
};
