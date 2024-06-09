module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      fontFamily: {
        anta: ['Anta', 'sans-serif'],      // Pridajte písmo Anta
        oswald: ['Oswald', 'sans-serif'],
        libre: ['Libre Baskerville', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],

      },
      boxShadow: {
        'miniApp': '1px 0px 39px -20px rgba(0,0,0,0.75) inset',
        'minContent': '0px 0px 30px -10px rgba(0,0,0,0.75) inset',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'fullNewEvent': '1000px',
        "fullApp": "100vw",
      },
      backgroundImage: {
        'loginBackg': "url('/public/image/loginimg.jpg')",
        'background_App': "var(--background_App)",
      },
      colors: {
        thems: {
          //! buttonStyle
          background_button: 'var(--background_button)',
          color_button: 'var(--color_button)',
          background_button_hover: "var(--background_button_hover)",

          //! appBackGround 
          background_content: "var(--background_content)",
          background_content_header: "var(--background_content_header)",

          //! CalendarBackGround
          calendarContent_background: "var(--calendarContent_background)",
          dayBackground_hover: "var(--dayBackground_hover)",
          eventBackground: "var(--eventBackground)",
          minBackg_content: "var(--minBackg_content)",
          dayBackground_header: "var(--dayBackground_header)",
          eventBackground_selected: "var(--eventBackground_selected)",
          current_time_line: "var(--current_time_line)",
          minBackg_Two_content: "var(--minBackg_Two_content)",
          background_block: "var(--background_block)",
          InvalidDay_Background: "var(--InvalidDay_Background)",

          //! littleComponent
          littleComponent_Background: "var(--littleComponent_Background)",
          littleComponent_border: "var(--littleComponent_border)",

          //! MessageBackGround
          messageContent_background: "var(--messageContent_background)",
          newMessageForm_Background: "var(--newMessageForm_Background)",
          itemHeader_Background: "var(--itemHeader_Background)",
          item_Background: "var(--item_Background)",
          currentMessCount_Background: "var(--currentMessCount_Background)",

          //! textColor
          defaultTextColor: 'var(--defaultTextColor)',
          defaultTextColorDark: 'var(--defaultTextColorDark)',
          current_day: "var(--current_day)",

          //! inputStyle
          inputBorder: "var(--inputBorder)",

        },
      },
    },
  },
  plugins: [],
}
