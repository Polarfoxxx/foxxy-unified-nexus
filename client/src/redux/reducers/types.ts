import { Type_for_newMesssageFrom_DB } from "../../module/MessageModule";
import { Type_for_WeatherData } from "../../module/ContentModule";

//! types pre mapStateToProps pre ponuknutie stavu universalne------------
export type Type_RootState = {
  userLogData: {
    userName: string;
    appTheme: string;
  };
  allEvents: any,
  allMessages: Type_for_newMesssageFrom_DB[];
  weatherData: Type_for_WeatherData
};


//! types pre mapDispatchToProps pre nastavenie stavu-------------------
//! types pre userLoginData
export type Type_SetUserLogDataAction = {
  type: "setUser_userName";
  payload: {
    userName: string;
    appTheme: string;
  };
};

//! types pre userMessageList
export type Type_SetMessageDataAction = {
  type: "setAll_message";
  payload: Type_for_newMesssageFrom_DB[];
};

//! types pre weatherData
export type Type_SetWeatherDataAction = {
  type: "setWeatherData";
  payload: Type_for_WeatherData;
};