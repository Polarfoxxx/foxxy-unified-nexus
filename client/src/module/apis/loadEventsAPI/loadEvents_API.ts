import axios from "axios";
import { Type_for_NewEvent } from "../../CalendarModule/Components/NewEvent/type";


async function loadEvent_API(user: string): Promise<{ status: number, data: Type_for_NewEvent[] } | undefined> {
    console.log(user);
    
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
    }
}

export default loadEvent_API;
