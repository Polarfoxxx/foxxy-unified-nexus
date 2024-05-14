import axios from "axios";
import { BASE_URL } from "../../BASE_URL";


async function updateCookie(theme: string): Promise<number> {



    try {
        const cookieUpdate = await axios.get(`${BASE_URL}cookies-update/update_Cookie`, {
            params: { theme }, // Poslanie dát cez parametre URL
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
        return cookieUpdate.status
    }
    catch (error) {
        console.log(error);
        return 0
    };
};

export default updateCookie;