import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { addMessage_API } from "../../../apis/messageAPI";
import { NewRequest } from "../../../utils";
import { Container } from "../../../Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Type_for_newMessageFor_API } from "./types";
import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { loadMessage_API } from "../../../apis/messageAPI";

function MessageList(): JSX.Element {
    const [messageList, setMessageList] = React.useState<any[]>([]);
    const [newMessage, setNewMessage] = React.useState<any>({ start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const { appData, setAppData } = React.useContext(Container.Context);

    React.useEffect(() => {
        loadMessageAPI()
    }, [])

    async function loadMessageAPI() {
        const USER = appData.userLogData.userName;
        try {
            const LOAD = await loadMessage_API(USER);
console.log(LOAD);

            setAppData({
                ...appData,
                allMessage: LOAD.data
            });

        } catch (error) {
            console.log("Chyba pri načítavaní udalostí:", error);
        };
    }



    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_message: new Date(),
            title_message: v[0].inputValues.toString(),
            content_Message: v[1].inputValues.toString(),
            endDate_message: v[2].inputValues.toString()
        });
        const SAVE_DATA: Type_for_newEventFor_API | Type_for_newMessageFor_API | string = NEW_REQ.create();
        if (typeof SAVE_DATA !== "string" && "message" in SAVE_DATA) {
            saveData(SAVE_DATA); reset();
            setAppData({
                ...appData,
                allMessage: [...appData.allMessage, SAVE_DATA.message]
            });
        } else {
            alert(SAVE_DATA)
        };
    };

    async function saveData(SAVE_DATA: Type_for_newMessageFor_API) {
        const USER = appData.userLogData.userName;
        try {
            const SAVE = await addMessage_API({ USER, SAVE_DATA });
            console.log(SAVE);
        }
        catch (error) {
            console.log(error);
        };
    }

    return (
        <div className="w-full h-[600px] flex items-center justify-center flex-col bg-amber-700">
            <div className=" w-full h-[10%] flex items-center justify-center">

            </div>
            <div className=" w-full h-[20%] flex items-center justify-center">
                <form
                    className="w-full h-full p-2 flex justify-center items-center flex-col gap-2 "
                    onSubmit={(e) => handleSubmit(e, submit)}>
                    <input
                        name="message"
                        type="text" />
                    <input
                        name="message"
                        type="text" />
                    <DatePicker
                        autoComplete="false"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Čas"
                        dateFormat="dd.MM.yyyy HH:mm"
                        name="startDate"
                        className=" w-80 h-7 rounded pl-3 pr-3 text-center border border-thems-inputBorder "
                        placeholderText="Start Date"
                        selected={newMessage.start}
                        onChange={(start) => setNewMessage({ ...newMessage, start })} />
                    <button
                        type="submit">
                        Create new message
                    </button>
                </form>
            </div>
            <div className=" w-full h-[100%] flex items-center justify-center bg-white" >
                {
                    appData.allMessage.map((item, key) =>
                        <div key={key}>
                            {item.content_message}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MessageList;