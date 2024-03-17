module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Anta', 'sans-serif'],
      },
      colors: {
        thems: {
          /* buttonStyle*/
          background_button: 'var(--background_button)',
          color_button: 'var(--color_button)',
          dark: '#CD5C5C',
          /* appBackGround */
          background_header: 'var(--background_header)',
          /* textColor */
          defaultTextColor: 'var(--defaultTextColor)',

        },
      },
    },
  },
  plugins: [],
}
