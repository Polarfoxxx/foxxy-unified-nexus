import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { createData_API } from "../../../apis/index.";
import { NewRequest } from "../../../utils";
import { Container } from "../../../ContainerModule";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Type_for_newEventFor_API } from "../../../CalendarModule";
import { Type_for_newMesssageFrom_DB, Type_for_newMessageFor_API } from "./types";

function MessageList(): JSX.Element {
    const [messageList, setMessageList] = React.useState<Type_for_newMesssageFrom_DB[]>([]);
    const [newMessage, setNewMessage] = React.useState<any>({ start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();
    const { appData, setAppData } = React.useContext(Container.Context);

    React.useEffect(() => {
        if (appData.allMessage.length > 0) {
            setMessageList(appData.allMessage)
        };
    }, [JSON.stringify(appData.allMessage)]);


    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_message: new Date(),
            title_message: v[0].inputValues.toString(),
            content_Message: v[1].inputValues.toString(),
            endDate_message: v[2].inputValues.toString()
        });
        const CREATE_DATA: Type_for_newEventFor_API | Type_for_newMessageFor_API | string = NEW_REQ.create();
        if (typeof CREATE_DATA !== "string" && "message" in CREATE_DATA) {
            createAsyncData(CREATE_DATA); reset();
            setAppData(prevAppData => ({
                ...prevAppData,
                allMessage: [...prevAppData.allMessage, CREATE_DATA.message]
            }));

        } else {
            alert(CREATE_DATA)
        };
    };

    async function createAsyncData(CREATE_DATA: Type_for_newMessageFor_API) {
        const USER_NAME = appData.userLogData.userName;
        try {
            const CREATE = await createData_API({ USER_NAME, CREATE_DATA });
            console.log(CREATE);
        }
        catch (error) {
            console.log(error);
        };
    }

    return (
        <div className="w-full h-[600px] flex items-center justify-center flex-col bg-amber-700">
            <div className=" w-full h-[10%] flex items-center justify-center">
                <h2>Your message</h2>
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
                <div className=" w-[90%] h-auto flex justify-center items-start gap-2 flex-col">
                    {
                        messageList.map((item, key) =>
                            <div
                                className=" w-[70%] h-[50px] bg-slate-300 "
                                key={key}>
                                {item.content_message}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageList;