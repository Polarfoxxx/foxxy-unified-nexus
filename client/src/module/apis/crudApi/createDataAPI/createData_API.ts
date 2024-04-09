import axios from "axios";
import { Type_for_createData_API } from "./types";
import { BASE_URL } from "../../BASE_URL";

/* --------------------------------------------------------------------------------------- */
async function createData_API(props: Type_for_createData_API): Promise<{ status: number } | undefined> {
    if (props.CREATE_DATA) {
        const DATA_FOR_API = {
            userName: props.USER_NAME,
            save_Data: props.CREATE_DATA,
        };
        try {
            const RESPO_DATA = await axios.post(`${BASE_URL}create/data`, DATA_FOR_API, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return {
                status: RESPO_DATA.status,
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default createData_API;
