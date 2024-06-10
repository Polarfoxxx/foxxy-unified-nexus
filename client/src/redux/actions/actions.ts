import { Type_for_data } from "../../module/AuthentificationModule";
import { Type_forSetAllMessage } from "./types";
import { Type_for_WeatherData } from "../../module";
import { Type_for_dayAndHoliday } from "../../module/CalendarModule";
import { Type_for_newEventFrom_DB } from "../../module/CalendarModule";

//! nastavenie pre authentificaton 
export const setUserLogData = (data: Type_for_data) => {
    return {
        type: "setUser_userName",
        payload: data
    };
};


//! nastavenie pre message 
export const setAllMessages = (props: Type_forSetAllMessage) => {
    return {
        type: props.typeEvent,
        payload: props.data
    };
};

//! nastavenie pre event 
export const setAllEvent = (data: Type_for_newEventFrom_DB[]) => {
    return {
        type: "setAll_event",
        payload: data
    };
};

//! nastavenie pre weather 
export const setWeatherData = (data: Type_for_WeatherData) => {
    return {
        type: "setWeatherData",
        payload: data
    };
};

//! nastavenie pre weather 
export const setAllHoliday = (data: Type_for_dayAndHoliday[]) => {
    return {
        type: "setHoliday",
        payload: data
    };
};







