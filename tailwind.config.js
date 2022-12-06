/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            keyframes: {
                gradient: {
                    '0%, 100%': { 'background-position': '0% 50% '},
                    '50%': { 'background-position': '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}