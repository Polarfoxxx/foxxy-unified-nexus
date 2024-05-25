import { combineReducers } from 'redux';
import { Type_SetUserLogDataAction, Type_SetMessageDataAction } from '..';
import {
  defaultValueforUserData,
  defaultValueforMessage,
  defaultWeatherData
} from './defaultValue';



//! Reduktor údajov o prihlásení používateľa
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


//! Reduktor pre pridanie všetkých eventov calendar
const allEventsReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor pre pridanie všetkých message
const allMessagesReducer = (state = defaultValueforMessage, action: Type_SetMessageDataAction) => {
  switch (action.type) {
    case 'setAll_message':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor pre pridanie weather dat
const weatherReducer = (state = defaultWeatherData, action: Type_SetMessageDataAction) => {
  switch (action.type) {
    case 'setAll_message':
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
  weatherData: weatherReducer
});

export default rootReducer;
