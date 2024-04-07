import axios from "axios";
import { Type_for_addMessage_API } from "./types";
import { BASE_URL } from "../../BASE_URL";
/* --------------------------------------------------------------------------------------- */
async function addMessage_API(props: Type_for_addMessage_API): Promise<{ status: number } | undefined> {
    if (props.SAVE_DATA) {
        const DATA_FOR_API = {
            userName: props.USER,
            save_Data: props.SAVE_DATA,
        };
        try {
            const RESPO_DATA = await axios.post(`${BASE_URL}save/data`, DATA_FOR_API, {
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

export default addMessage_API;
