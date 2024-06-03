import axios from "axios";

async function dayAndHoliday() {
    const apiKey = process.env.REACT_APP_NINJAS_API;
    const country = "SK";
    const year = "2024";

    try {
        const reqData = await axios.get(`https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}`, {
            headers: { 'X-Api-Key': apiKey },
        });

        console.log(reqData.data);  // Přístup k datům

    } catch (error) {
        console.error("Error fetching data:", error);
        return undefined;
    }
}

export default dayAndHoliday;
