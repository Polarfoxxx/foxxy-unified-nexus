import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { Type_for_newEventFor_API } from "./type";
import { Type_for_newMessageFor_API } from "../../../MessageModule/Components/MessageList/types";
import { NewRequest } from "../../../utils";
import { createData_API } from "../../../apis/userDataCRUD_API";

type Type_forNewEvent ={
    userName: string
}

function NewEvent(props: Type_forNewEvent): JSX.Element {
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", comment: "", start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();

    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_event: v[0].inputValues.toString(),
            endDate_event: v[1].inputValues.toString(),
            name_Event: v[2].inputValues.toString(),
            comment_Event: v[3].inputValues.toString(),
        });

        const create_data: Type_for_newMessageFor_API | Type_for_newEventFor_API | string = NEW_REQ.create();
        if (typeof create_data !== "string" && "event" in create_data) {
            createAsyncData(create_data);
            reset();

        } else {
            alert(create_data)
        };
    };


    async function createAsyncData(create_data: Type_for_newEventFor_API) {
        const loginUserName = props.userName
        try {
              const create_event = await createData_API({ loginUserName, create_data});
              console.log(create_event);
              
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <div className=" w-full h-full relative">
            <div className=" w-full h-full flex items-center justify-start flex-col ">
                <div className=" w-full min-h-[50px] flex justify-center items-center bg-thems-minBackg_content rounded-tr-[5px] rounded-br-[5px]">
                    <h2 className=" text-[22px] text-thems-defaultTextColor">
                        Set new event
                    </h2>
                </div>
                <form
                    onSubmit={(e) => handleSubmit(e, submit)}
                    className=" w-full h-[100%] flex justify-center items-center flex-col bg-thems-background_block  ">
                    <div className=" w-[80%] h-[100%]  flex justify-center items-start flex-col ">
                        <div className="w-full h-[100%] flex justify-center items-start flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[15px]">
                                    Set start event:
                                </h4>
                            </div>
                            <div>
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="startDate"
                                    className=" w-[400px] h-[30px] text-[14px] bg-white ml-3 pl-3 pr-3 text-start border-b-2 border-thems-inputBorder focus:outline-none focus:border-transparent"
                                    placeholderText="Start Date"
                                    selected={newEvent.start}
                                    onChange={(start) => setNewEvent({ ...newEvent, start })} />
                            </div>
                        </div>

                        <div className="w-full h-[100%] flex justify-center items-start flex-col">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[15px]">
                                    Set end event:
                                </h4>
                            </div>
                            <div>
                                <DatePicker
                                    autoComplete="false"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Čas"
                                    dateFormat="dd.MM.yyyy HH:mm"
                                    name="endDate"
                                    className=" w-[400px] h-[30px] text-[14px] bg-white ml-3 pl-3 pr-3 text-start border-b-2 border-thems-inputBorder focus:outline-none focus:border-transparent"
                                    placeholderText="End Date"
                                    selected={newEvent.end}
                                    onChange={(end) => setNewEvent({ ...newEvent, end })} />
                            </div>
                        </div>
                    </div>

                    <div className=" w-[80%] h-full flex flex-col justify-center items-center gap-1">
                        <div className="w-full h-full flex items-start justify-center flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[15px]">
                                    Set Name event for easy indetification.
                                </h4>
                            </div>
                            <div>
                                <input
                                    name="name event"
                                    type="text"
                                    placeholder="Add Title"
                                    className=" w-[400px] h-[30px] text-[14px] ml-3 bg-white pl-3 pr-3 text-start border-b-2 border-thems-inputBorder focus:outline-none focus:border-transparent" />
                            </div>
                        </div>
                        <div className="w-full  h-full flex items-start justify-center flex-col gap-1">
                            <div className=" w-[60%] h-auto">
                                <h4 className=" text-[15px]">
                                    Set comment for event.
                                </h4>
                            </div>
                            <div>
                                <input
                                    name="name event"
                                    type="text"
                                    placeholder="Comment"
                                    className=" w-[400px] h-[30px] text-[14px] ml-3 bg-white pl-3 pr-3 text-start border-b-2 border-thems-inputBorder focus:outline-none focus:border-transparent" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-[80%] h-full flex justify-start items-center">
                        <button
                            type="submit"
                            className="  w-[200px] h-[30px] text-thems-defaultTextColor rounded-md flex items-center justify-center bg-thems-background_button hover:bg-thems-background_button_hover">
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
            <div className=" absolute w-[250px] h-[250px]  right-[30px] bottom-[50px]">
                <img src="/image/calendar.png" alt="" />
            </div>
        </div>
    );
};

export default NewEvent;
