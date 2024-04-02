
/* message */
export type Type_for_newMessageFor_API = {
    message: {
        start_message: Date;
        end_message: Date;
        title_message: string;
        content_message: string;
    }
};

export type Type_for_newMesssageFrom_DB = {
    start_message: Date;
    end_message: Date;
    title_message: string;
    content_message: string;
};