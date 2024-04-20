import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_newEventFrom_DB } from "../../../CalendarModule";
import { Type_for_newMesssageFrom_DB } from "../../../MessageModule/Components/MessageList/types";

export type Type_for_readData_API = {
    status: number,
    data: {
        events: Type_for_newEventFrom_DB[],
        messages: Type_for_newMesssageFrom_DB[],
        theme: string
    }
};



async function readData_API(user: string): Promise<Type_for_readData_API | undefined> {

    try {
        const LOAD_DATA = await axios.get(`${BASE_URL}read/data`, {
            params: {
                userName: user
            }
        });
        return {
            status: LOAD_DATA.status,
            data: {
                events: LOAD_DATA.data.events,
                messages: LOAD_DATA.data.message,
                theme: LOAD_DATA.data.theme
            }
        };
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default readData_API;
