import axios from "axios";
import { BASE_URL } from "../../BASE_URL";


async function updateCookie(theme: string): Promise<string | undefined> {
    try {
        const cookieUpdate = await axios.get(`${BASE_URL}cookies-update/update_Cookie`, {
            params: { theme }, // Poslanie dát cez parametre URL
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        console.log(cookieUpdate);

    }
    catch (error) {
        console.log(error);
    };
    return undefined
};

export default updateCookie;