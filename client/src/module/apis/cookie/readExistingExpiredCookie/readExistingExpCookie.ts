import axios from "axios";
import { BASE_URL } from "../../BASE_URL";


async function readExistingExpCookie(): Promise<boolean> {

    try {
        const cookieExpired = await axios.get(`${BASE_URL}cookies-exp/read_Exp_Existing_Cookie`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });
        const isValid = cookieExpired.data.valid;
        return isValid
    }
    catch (error) {
        console.log(error);
    };
    return false
};


export default readExistingExpCookie;