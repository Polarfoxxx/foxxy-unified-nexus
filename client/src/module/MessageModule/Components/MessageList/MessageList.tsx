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
import { ValidMessageList, InvalidMessageList } from "./router";
import { Route, Routes, Link, NavLink } from "react-router-dom";

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
                                <h3 className=" text-thems-defaultTextColor">
                                    The title for new message
                                </h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                <input
                                    className=" w-[300px] h-[30px] text-center pl-2 pr-2 rounded-lg"
                                    placeholder="Title message"
                                    name="message"
                                    type="text" />
                            </div>
                        </div>
                        <div className="w-[850px] h-[100%] flex justify-center items-center flex-col">
                            <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                <h3 className=" text-thems-defaultTextColor">
                                    The content for new message
                                </h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                <input
                                    className=" w-[100%] h-[30px] text-center pl-2 pr-2 rounded-lg"
                                    placeholder="Message"
                                    name="message"
                                    type="text" />
                            </div>
                        </div>
                        <div className="w-[300px] h-[100%] flex justify-center items-center flex-col">
                            <div className=" w-[100%] h-[20%] flex justify-center items-center">
                                <h3 className=" text-thems-defaultTextColor">
                                    Last termin
                                </h3>
                            </div>
                            <div className=" w-[100%] h-[100%] flex justify-center items-center">
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="startDate"
                                    className=" w-[300px] h-[30px] rounded-lg pl-2 pr-2 text-center border border-thems-inputBorder "
                                    placeholderText="Due Date"
                                    selected={newMessage.start}
                                    onChange={(start) => setNewMessage({ ...newMessage, start })} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-row">
                        <div className="w-full h-full flex justify-center items-center">
                            <button
                                className=" w-[280px] h-[30px] border border-thems-minBackg_content rounded-xl bg-thems-background_button text-thems-defaultTextColorDark hover:bg-thems-background_button_hover"
                                type="submit">
                                Create new message
                            </button>
                        </div>
                        <div className=" w-full h-full flex items-center justify-around bg-thems-newMessageForm_Background">
                            <NavLink
                                className="m-2 flex justify-center items-center  w-[220px] h-[30px] border border-thems-minBackg_content rounded-xl  hover:bg-thems-background_button_hover"
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? 'var(--minBackg_content)' : 'var(--background_button)',
                                    color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                })}
                                to="ValidMessageList">
                                Your note
                            </NavLink>
                            <NavLink
                                className="m-2 flex justify-center items-center w-[220px] h-[30px] border border-thems-minBackg_content rounded-xl hover:bg-thems-background_button_hover"
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? 'var(--minBackg_content)' : 'var(--background_button)',
                                    color: isActive ? 'var(--defaultTextColor)' : 'var(--defaultTextColorDark)',
                                })}
                                to="InvalidMessageList"
                            >Fulfilled note
                            </NavLink>
                        </div>
                        <div className="w-full h-full flex justify-center items-center ">
                            <div className="w-[50%] h-full flex justify-center items-center flex-row bg-thems-minBackg_content rounded-lg gap-6">
                                <div className="w-[100%] h-[100%] flex justify-end items-center">
                                    <h2 className=" text-thems-defaultTextColor">
                                        All message count:
                                    </h2>
                                </div>
                                <div className="w-[30%] h-[100%] flex justify-start items-center">
                                    <h1 className=" text-[20px] text-thems-defaultTextColor">
                                        {appData.allMessage.length}
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>

            <div className=" w-full h-[700px] h-max-[700px] overflow-x-auto min-h-[500px] flex items-start justify-center" >
                <div className=" w-[100%] h-[100%] flex justify-center items-center  bg-thems-calendarContent_background rounded-br-[10px] rounded-bl-[10px]">
                    <Routes>
                        <Route
                            path="ValidMessageList/*"
                            element={<ValidMessageList
                                messageList={messageList} />}
                        />
                        <Route
                            path="InvalidMessageList"
                            element={<InvalidMessageList
                                messageList={messageList} />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MessageList;