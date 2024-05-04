import { Type_for_newMesssageFrom_DB } from "../../module/MessageModule";

// types pre mapStateToProps pre ponuknutie stavu universal------------
export type Type_RootState = {
  allMessages: Type_for_newMesssageFrom_DB[];
  userLogData: {
    userName: string;
    appTheme: string;
  };
};



// types pre mapDispatchToProps pre nastavenie stavu-------------------
// types pre userLoginData
export type Type_SetUserLogDataAction = {
  type: "setUser_userName";
  payload: {
      userName: string;
      appTheme: string;
  };
};

// types pre userMessageList
export type Type_SetMessageDataAction = {
  type: "setAll_message" | "add_message" | "delete_message";
  payload: Type_for_newMesssageFrom_DB[] | Type_for_newMesssageFrom_DB;
};