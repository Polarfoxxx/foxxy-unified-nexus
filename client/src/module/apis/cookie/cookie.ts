import axios from "axios";
import { BASE_URL } from "../BASE_URL";


async function cookie(): Promise<boolean> {

    try {
        const cookieExpired = await axios.get(`${BASE_URL}cookies/set-cookie`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
        console.log(cookieExpired);
        const isValid = cookieExpired.data.valid;
        if (cookieExpired) {
            return isValid
        };
    }
    catch (error) {
        console.log(error);
    };
    return false
};


export default cookie;