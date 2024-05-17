import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { Type_for_readData_API } from "./types";

async function readData_API(): Promise<Type_for_readData_API | undefined> {

    try {
        const LOAD_DATA = await axios.get(`${BASE_URL}read/data`, {
            withCredentials: true
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
        return undefined;
    };
};

export default readData_API;
