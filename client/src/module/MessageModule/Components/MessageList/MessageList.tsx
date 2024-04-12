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
import { ItemMessage } from "../ItemsMessage";

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
        <div className="w-full h-[600px] flex items-center justify-center flex-col bg-thems-calendarContent_background">
            <div className=" w-full h-[10%] flex items-center justify-between flex-row ">
                <div className=" w-[100%] h-[100%] bg-thems-minBackg_content roud flex items-center justify-center rounded-r-[25px]">
                    <h2 className=" text-[25px]">
                        Message
                    </h2>
                </div>
                <div className=" w-[60%] h-[100%] bg-white">
                    {/* white style */}
                </div>
            </div>
            <div className=" w-full h-[20%] flex items-center justify-center">
                <form
                    className="w-full h-full p-2 flex justify-center items-center flex-col gap-2 bg-thems-InvalidDay_Background"
                    onSubmit={(e) => handleSubmit(e, submit)}>
                    <div className="w-full h-full flex justify-center items-center flex-row gap-2 ">
                        <input
                            className=" w-[400px] h-[35px] text-center pl-2 pr-2 rounded-lg"
                            placeholder="Title message"
                            name="message"
                            type="text" />
                        <input
                            className=" w-[600px] h-[35px] text-center pl-2 pr-2 rounded-lg"
                            placeholder="Message"
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
                            className=" w-[400px] h-[35px] rounded-lg pl-2 pr-2 text-center border border-thems-inputBorder "
                            placeholderText="Due Date"
                            selected={newMessage.start}
                            onChange={(start) => setNewMessage({ ...newMessage, start })} />
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-row">
                        <button
                            type="submit">
                            Create new message
                        </button>
                    </div>
                </form>
            </div>
            <div className=" w-full h-[100%] flex items-center justify-center" >
                <div className=" w-[90%] h-auto flex justify-center items-center gap-2 flex-col">
                    {
                        messageList.map((item, key) =>
                            <div
                                className=" w-[80%] h-[50px] bg-slate-300 cursor-pointer flex"
                                key={key}>
                                <ItemMessage itemData={item} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageList;