import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_newEventFrom_DB } from "../../../CalendarModule";
import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";

export type Type_for_readData_API = {
    status: number,
    data: {
        events: Type_for_newEventFrom_DB[],
        messages: Type_for_newMesssageFrom_DB[]
    }
};



async function readData_API(user: string): Promise<Type_for_readData_API | undefined> {

    try {
        const LOAD_DATA = await axios.get(`${BASE_URL}readData/data`, {
            params: {
                userName: user
            }
        });
        console.log(LOAD_DATA.data);

        return {
            status: LOAD_DATA.status,
            data: {
                events: LOAD_DATA.data.events,
                messages: LOAD_DATA.data.message
            }
        };
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default readData_API;
