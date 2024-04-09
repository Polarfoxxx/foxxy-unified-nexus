import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_saveDataTheme } from "../../../HeaderModule";
import { Type_for_newMessageFor_API } from "../../../MessageModule";

export type Type_for_createData_API = {
    USER_NAME: string,
    CREATE_DATA: Type_for_newEventFor_API | Type_for_saveDataTheme | Type_for_newMessageFor_API
};