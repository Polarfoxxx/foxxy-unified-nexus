import { combineReducers } from 'redux';
import {
  Type_SetUserLogDataAction,
  Type_SetMessageDataAction,
  Type_SetWeatherDataAction,
  Type_SetHolidayDataAction,
  Type_SetEventDataAction
} from '..';
import {
  defaultValueforUserData,
  defaultValueforMessage,
  defaultWeatherData,
  defaultAllHolidayData,
  defaultValueForCalendarEvent
} from './defaultValue';



//? Reduktor údajov o prihlásení používateľa
const userLogDataReducer = (state = defaultValueforUserData, action: Type_SetUserLogDataAction) => {
  switch (action.type) {
    case 'setUser_userName':
      return {
        userName: action.payload.userName,
        appTheme: action.payload.appTheme,
      };
    default:
      return state;
  };
};


//? Reduktor pre pridanie eventov calendar
const allEventsReducer = (state = defaultValueForCalendarEvent, action: Type_SetEventDataAction) => {
  switch (action.type) {
    case 'setAll_event':
      return action.payload;
    default:
      return state;
  }
};

//? Reduktor pre pridanie message
const allMessagesReducer = (state = defaultValueforMessage, action: Type_SetMessageDataAction) => {
  switch (action.type) {
    case 'setAll_message':
      return action.payload;
    default:
      return state;
  }
};

//? Reduktor pre pridanie weather dat
const weatherReducer = (state = defaultWeatherData, action: Type_SetWeatherDataAction) => {
  switch (action.type) {
    case 'setWeatherData':
      return action.payload;
    default:
      return state;
  }
};

//? Reduktor pre pridanie holiday dat
const holidayReducer = (state = defaultAllHolidayData, action: Type_SetHolidayDataAction) => {
  switch (action.type) {
    case 'setHoliday':
      return action.payload;
    default:
      return state;
  }
};


//! Kombinácia všetkých reduktorov do koreňového reduktora
const rootReducer = combineReducers({
  userLogData: userLogDataReducer,
  allEvents: allEventsReducer,
  allMessages: allMessagesReducer,
  weatherData: weatherReducer,
  allHoliday: holidayReducer
});

export default rootReducer;
