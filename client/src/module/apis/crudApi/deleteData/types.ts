import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";

export type Type_for_deleteData_forAPI = {
    USER_NAME: string,
    DELETE_DATA: Type_for_newMesssageFrom_DB
};
export type Type_from_returned_delete_API = {
    status: number, updateMessages: Type_for_newMesssageFrom_DB[]
}