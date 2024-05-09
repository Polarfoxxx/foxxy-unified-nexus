import axios from "axios";
import { BASE_URL } from "../BASE_URL";


async function createCookie() {

    try {
        const cooki = await axios.get(`${BASE_URL}cookies/set-cookie`);
        console.log(cooki);
    }
    catch (error) {
        console.log(error);
    }
}


export default createCookie;