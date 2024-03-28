import axios from "axios";
import { Type_from_loadEvent_API } from "./types";

async function loadEvent_API(user: string): Promise<Type_from_loadEvent_API | undefined> {
    try {
        const LOAD_DATA = await axios.get("http://localhost:4000/load/data", {
            params: {
                userName: user
            }
        });
        return {
            status: LOAD_DATA.status,
            data: LOAD_DATA.data.message
        };
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default loadEvent_API;
