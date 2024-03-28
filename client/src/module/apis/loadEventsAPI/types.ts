import { Type_for_newEventFrom_DB } from "../../CalendarModule";

export type Type_from_loadEvent_API = {
    status: number,
    data: Type_for_newEventFrom_DB[]
};