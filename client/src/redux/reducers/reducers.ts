import { combineReducers } from 'redux';
import { Type_SetUserLogDataAction, Type_SetMessageDataAction } from '..';
import { Type_for_newMesssageFrom_DB } from '../../module/MessageModule';

//! Reduktor pre aktualizáciu údajov o prihlásení používateľa
const defaultValueforUserData = {
  userName: '',
  appTheme: ''
};
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


//! Reduktor pre pridanie všetkých udalostí do stavu
const allEventsReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

//! Reduktor pre pridanie všetkých message do stavu
const defaultValueforMessage: Type_for_newMesssageFrom_DB[] = []
const allMessagesReducer = (state = defaultValueforMessage, action: Type_SetMessageDataAction) => {
  switch (action.type) {
    case 'setAll_message':
      return action.payload;
    default:
      return state;
  }
};






// Kombinácia všetkých reduktorov do koreňového reduktora
const rootReducer = combineReducers({
  userLogData: userLogDataReducer,
  allEvents: allEventsReducer,
  allMessages: allMessagesReducer,
});

export default rootReducer;
