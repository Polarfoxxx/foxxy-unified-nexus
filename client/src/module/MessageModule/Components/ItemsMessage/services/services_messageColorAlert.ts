import React from "react";
import { Type_for_newMesssageFrom_DB } from "../../MessageList";

export type Type_for_services_messageColorAlert = {
    itemMessageData: Type_for_newMesssageFrom_DB
};


function services_messageColorAlert(props: Type_for_services_messageColorAlert): React.CSSProperties {
    const CURRENT_TIME = new Date();
    const endMessageCopy = new Date(props.itemMessageData.end_message);

    const ADD_6H = CURRENT_TIME.setHours(CURRENT_TIME.getHours() + 6);
    const ADD_12H = CURRENT_TIME.setHours(CURRENT_TIME.getHours() + 6);
    const ADD_24H = CURRENT_TIME.setHours(CURRENT_TIME.getHours() + 12);
    const ADD_48H = CURRENT_TIME.setHours(CURRENT_TIME.getHours() + 24);

    if (new Date(ADD_6H) > endMessageCopy) {
        return ({ backgroundColor: "red" });
    } else if (new Date(ADD_6H) < endMessageCopy && new Date(ADD_12H) > endMessageCopy) {
        return ({ backgroundColor: "yellow" });
    } else if (new Date(ADD_12H) < endMessageCopy && new Date(ADD_24H) > endMessageCopy) {
        return ({ backgroundColor: "green" });
    }
    return ({ backgroundColor: "transparent" })
};

export default services_messageColorAlert;