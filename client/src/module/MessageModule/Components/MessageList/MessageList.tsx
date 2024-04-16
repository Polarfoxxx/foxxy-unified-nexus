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
    }, [JSON.stringify(appData.allMessage), appData.allMessage.length]);


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
    console.log(appData.allMessage)

    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className=" w-full h-[10%] flex items-center justify-between flex-row">
                <div className=" w-[100%] h-[100%] bg-thems-minBackg_content roud flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px]">
                    <h2 className=" text-[25px] text-thems-defaultTextColor">
                        Message
                    </h2>
                </div>
                <div className=" w-[60%] h-[100%] bg-white">
                    {/* white style */}
                </div>
            </div>
            <div className=" w-full h-[30%]  flex items-center justify-center">
                <form
                    className="w-full min-h-[130px] p-2 flex justify-center rounded-tr-[10px] items-center flex-col gap-5 bg-thems-newMessageForm_Background"
                    onSubmit={(e) => handleSubmit(e, submit)}>
                    <div className="w-full h-full flex justify-center items-center flex-row gap-2 ">
                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                            <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                <h3>The title for new message</h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center bg-slate-300">
                                <input
                                    className=" w-[300px] h-[35px] text-center pl-2 pr-2 rounded-lg"
                                    placeholder="Title message"
                                    name="message"
                                    type="text" />
                            </div>
                        </div>
                        <div className="w-[850px] h-[100%] flex justify-center items-center flex-col">
                            <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                <h3>The content for new message</h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                <input
                                    className=" w-[100%] h-[35px] text-center pl-2 pr-2 rounded-lg"
                                    placeholder="Message"
                                    name="message"
                                    type="text" />
                            </div>
                        </div>
                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                            <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                <h3>
                                    Last termin
                                </h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center bg-slate-400">
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="startDate"
                                    className=" w-[300px] h-[35px] rounded-lg pl-2 pr-2 text-center border border-thems-inputBorder "
                                    placeholderText="Due Date"
                                    selected={newMessage.start}
                                    onChange={(start) => setNewMessage({ ...newMessage, start })} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-row">
                        <div className="w-full h-full flex justify-start items-center">
                            <button
                                className=" w-[280px] h-[30px] border border-thems-minBackg_content rounded-xl bg-thems-background_button text-thems-defaultTextColorDark hover:bg-thems-background_button_hover"
                                type="submit">
                                Create new message
                            </button>
                        </div>
                        <div className="w-[20%] h-full flex justify-center items-center flex-row bg-thems-minBackg_content rounded-lg">
                            <div className="w-[100%] h-[100%] flex justify-center items-center">
                                <h2 className=" text-thems-defaultTextColor">
                                    Message count:
                                </h2>
                            </div>
                            <div className="w-[100%] h-[100%] flex justify-center items-center">
                                <h1 className=" text-[20px] text-thems-defaultTextColor">
                                    {appData.allMessage.length}
                                </h1>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className=" w-full h-[700px] h-max-[700px] overflow-x-auto min-h-[500px] flex items-start justify-center" >
                <div className=" w-[100%] h-auto flex  justify-center items-start gap-2 flex-col bg-thems-calendarContent_background p-6 rounded-br-[10px] rounded-bl-[10px]">
                    {
                        messageList.map((item, key) =>
                            <div
                                style={key === 0 ? { borderRadius: "20px 20px 0 0" } : key === messageList.length - 1 ? { borderRadius: "0 0 20px 20px" } : { borderRadius: "0px" }}
                                className=" w-[80%] h-[120px] rounded-tr-[0px] bg-thems-item_Background cursor-pointer overflow-hidden flex"
                                key={key}>
                                <ItemMessage
                                    keyType={key}
                                    itemData={item} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageList;