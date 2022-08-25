module.exports = {
    content: ['./src/**/*.html', './src/**/*.js'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#4f3cc9',
                'primary-dark': '#4232aa',
                secondary: '#ffffff',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
