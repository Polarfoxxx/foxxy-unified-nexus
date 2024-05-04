import axios from "axios";
import { Type_for_createData_API } from "./types";
import { BASE_URL } from "../../BASE_URL";

/* --------------------------------------------------------------------------------------- */
async function createData_API(props: Type_for_createData_API): Promise<{ status: number } | undefined> {
    if (props.create_data) {
        const dataFor_Api = {
            userName: props.loginUserName,
            save_Data: props.create_data,
        };
        console.log(dataFor_Api);
        
        try {
            const RESPO_DATA = await axios.post(`${BASE_URL}create/data`, dataFor_Api, {
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
