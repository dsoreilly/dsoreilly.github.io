/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/index.html'],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Hubot Sans', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                gradient: {
                    '0%': { 'background-position': '0% 50% '},
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '50% 0' },
                },
            },
        },
    },
    plugins: [],
}