import { Type_forSetAllMessage } from "../../../redux";
import { Type_for_data } from "../../AuthentificationModule";

//component
export type Type_for_Content = {
    setAllMessages: (props: Type_forSetAllMessage) => void;
    setUserLogData: (data: Type_for_data) => void
};
