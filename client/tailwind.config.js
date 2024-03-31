module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'fullNewEvent': '1000px',
        "fullApp": "1920px",
      },
      backgroundImage: {
        'loginBackg': "url('/public/image/loginimg.jpg')",
        'background_newEventContent': "var(--background_newEventContent)",
        'background_App': "var(--background_App)",
      },
      colors: {
        thems: {
          /* buttonStyle*/
          background_button: 'var(--background_button)',
          color_button: 'var(--color_button)',
          background_button_hover: "var(--background_button_hover)",
          /* textColor */
          defaultTextColor: 'var(--defaultTextColor)',
          defaultTextColorDark: 'var(--defaultTextColorDark)',
          current_day: "var(--current_day)",
          /* inputStyle */
          inputBorder: "var(--inputBorder)",
          /* backgroundCont */
          dayBackground_hover: "var(--dayBackground_hover)",
          eventBackground: "var(--eventBackground)",
          minBackg_content: "var(--minBackg_content)",
          dayBackground_header: "var(--dayBackground_header)",
          eventBackground_selected: "var(--eventBackground_selected)",
          current_time_line: "var(--current_time_line)"


        },
      },
    },
  },
  plugins: [],
}
