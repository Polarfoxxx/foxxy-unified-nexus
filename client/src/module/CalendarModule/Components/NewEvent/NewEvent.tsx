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

function NewEvent(): JSX.Element {
    const [newEvent, setNewEvent] = React.useState<any>({ title: "", comment: "", start: "", end: "" });
    const { handleSubmit, reset } = useInputValue();

    const submit = (v: TypeForInputsObject["v"]): void => {
        const NEW_REQ = new NewRequest({
            startDate_event: v[0].inputValues.toString(),
            endDate_event: v[1].inputValues.toString(),
            name_Event: v[2].inputValues.toString(),
            comment_Event: v[3].inputValues.toString(),
        });

        const CREATE_DATA: Type_for_newMessageFor_API | Type_for_newEventFor_API | string = NEW_REQ.create();
        if (typeof CREATE_DATA !== "string" && "event" in CREATE_DATA) {
            createAsyncData(CREATE_DATA);
            reset();

        } else {
            alert(CREATE_DATA)
        };
    };


    async function createAsyncData(CREATE_DATA: Type_for_newEventFor_API) {
        try {
            /*  const CREATE = await createData_API({ USER_NAME, CREATE_DATA }); */
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <div className=" w-full h-full flex items-center justify-start flex-col">
            <div className=" w-full min-h-[50px] flex justify-center items-center bg-thems-minBackg_content rounded-tr-[5px] rounded-br-[5px]">
                <h2 className=" text-[22px] text-white ">
                    Set new event
                </h2>
            </div>
            <form
                onSubmit={(e) => handleSubmit(e, submit)}
                className=" w-full h-[100%] flex justify-center items-center flex-col bg-white rounded-br-[20px]">
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
                        className="  w-[200px] h-[30px] rounded-md flex items-center justify-center bg-thems-background_button hover:bg-thems-background_button_hover">
                        Add Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewEvent;
