module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      backgroundImage: {
        'loginBackg': "url('/public/image/loginimg.jpg')",
      },
      fontFamily: {
        'anta': ['Anta', 'sans-serif'],
      },
      colors: {
        thems: {
          /* buttonStyle*/
          background_button: 'var(--background_button)',
          color_button: 'var(--color_button)',
          background_button_hover: "var(--background_button_hover)",
          /* appBackGround */
          background_header: 'var(--background_header)',
          background_content: 'var(--background_content)',
          background_newEvent: 'var(--background_newEvent)',
          background_newEventContent: "var(--background_newEventContent)",
          background_newEventHeader: "var(--background_newEventHeader)",
          /* textColor */
          defaultTextColor: 'var(--defaultTextColor)',

        },
      },
    },
  },
  plugins: [],
}
