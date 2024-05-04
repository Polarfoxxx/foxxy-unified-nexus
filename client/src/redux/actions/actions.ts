import { Type_for_data } from "../../module/AuthentificationModule";
import { Type_forSetAllMessage } from "./types";

/* nastavenie pre authentificaton */
export const setUserLogData = (data: Type_for_data) => {
    return {
        type: "setUser_userName",
        payload: data
    };
};


/* nastavenie pre message */
export const setAllMessages = (props: Type_forSetAllMessage) => {
    return {
        type: props.typeEvent,
        payload: props.data
    };
};




