import axios from "axios";

/* --------------------------------------------------------------------------------------- */
async function addEvent_API(user: string, saveData: any): Promise<{ status: number } | undefined> {
    if (saveData) {
        const DATA_FORAPI = {
            userName: user,
            save_Data: saveData,
        };
        try {
            const RESPO_DATA = await axios.post("http://localhost:4000/save/data", DATA_FORAPI, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return {
                status: RESPO_DATA.status,
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export default addEvent_API;
