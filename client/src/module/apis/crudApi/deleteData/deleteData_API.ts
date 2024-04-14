import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_deleteData_forAPI, Type_from_returned_delete_API } from "./types";


async function deleteData_API(props: Type_for_deleteData_forAPI): Promise<Type_from_returned_delete_API | undefined> {
    if (props.DELETE_DATA) {
        const DATA_FOR_API = {
            userName: props.USER_NAME,
            delete_Data: props.DELETE_DATA,
        };
        try {
            const RESPO_DATA = await axios.delete(`${BASE_URL}delete/data`, {
                params: DATA_FOR_API,
            });
            return {
                status: RESPO_DATA.status,
                updateMessages: RESPO_DATA.data.updateMessages
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default deleteData_API;
