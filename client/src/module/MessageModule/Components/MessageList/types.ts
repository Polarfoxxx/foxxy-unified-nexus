import { Type_forSetAllMessage } from "../../../../redux";

/* message */
export type Type_for_newMessageFor_API = {
    message: {
        start_message: Date;
        end_message: Date;
        title_message: string;
        content_message: string;
        status: boolean
    }
};

export type Type_for_newMesssageFrom_DB = {
    start_message: Date;
    end_message: Date;
    title_message: string;
    content_message: string;
    status: boolean
};


//component
export type Type_forMessageList = {
    allMessages: Type_for_newMesssageFrom_DB[],
    userName: string,
    setAllMessages: (props: Type_forSetAllMessage) => void
}
