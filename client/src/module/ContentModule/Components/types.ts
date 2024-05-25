import { Type_forSetAllMessage } from "../../../redux";
import { Type_for_data } from "../../AuthentificationModule";
import { Type_for_WeatherData } from "./HeaderModule";

//component
export type Type_for_Content = {
    setAllMessages: (props: Type_forSetAllMessage) => void;
    setUserLogData: (data: Type_for_data) => void;
    setWeatherData: (data: Type_for_WeatherData) => void;
};
