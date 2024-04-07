import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

async function loadMessage_API(user: string): Promise<any | undefined> {
    try {
        const LOAD_DATA = await axios.get(`${BASE_URL}loadMessages/messages`, {
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

export default loadMessage_API;
