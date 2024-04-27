
 function miniContentStyle() {
    const CALENDAR_NAV_PANEL = document.querySelector(".rbc-toolbar");
    const CALENDAR_NEW_EVENT = document.querySelector("#calendarNewEvent");
    if (CALENDAR_NAV_PANEL instanceof HTMLElement && CALENDAR_NEW_EVENT instanceof HTMLElement) {
      const width = CALENDAR_NAV_PANEL.offsetWidth;
      if (width < 600) {
        CALENDAR_NAV_PANEL.style.display = "none";
        CALENDAR_NEW_EVENT.style.display = "none";
      } else {
        CALENDAR_NAV_PANEL.style.display = "block";
        CALENDAR_NEW_EVENT.style.display = "block";
      };
    };
 };

 export default miniContentStyle;

