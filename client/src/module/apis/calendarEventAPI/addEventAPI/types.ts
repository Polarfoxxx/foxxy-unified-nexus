import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_saveDataTheme } from "../../../HeaderModule";

export type Type_for_addEvent_API = {
    USER: string,
    SAVE_DATA: Type_for_newEventFor_API | Type_for_saveDataTheme
};