module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Anta', 'sans-serif'],
        },
        colors: {
          thems: {
            background_button: 'var(--background_button)',
            DEFAULT: '#FF6347', // Výchozí barva
            dark: '#CD5C5C',
          },
        },
      },
  },
  plugins: [],
}
