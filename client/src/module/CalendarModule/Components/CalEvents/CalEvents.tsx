import { Type_forCalEvents } from "./types";
import { Button } from "../../../../bookComponents";
import React from "react";



export type Type_for_CalEvents = {
    title: string,
    comment: string,
    start: string,
    end: string
}



function CalEvents(props: Type_forCalEvents): JSX.Element {
    const [allEventsForDisplay, setAllEventsForDisplay] = React.useState<Type_for_CalEvents[]>([]);

    React.useEffect(() => {

        const changeDateFormat: Type_for_CalEvents[] = props.allEvents.map((item) => {
            const date = new Date(item.start);
            const formattedDate = date.toLocaleDateString(); // Formátovaný dátum
            const formattedTime = date.toLocaleTimeString(); // Formátovaný čas

            return {
                ...item,
                start: formattedDate,
                end: formattedTime
            };
        });
        setAllEventsForDisplay(changeDateFormat)
    }, []);


    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-transparent flex justify-start items-start flex-col shadow-maxShadow p-1">
                <div className=" w-[auto] h-[40px] min-h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-transparent items-center justify-start pl-4">
                    <div className=" w-[110px] text-thems-defaultTextColor flex items-center justify-center bg-thems-minBackg_content rounded-[2px] font-oswald">
                        <h6>
                            All events:
                        </h6>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1>

                        </h1>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1 className=" font-bold">
                        </h1>
                    </div>
                </div>
                <div className=" w-full h-auto flex items-start justify-start p-4 overflow-y-scroll">
                    <div className=" w-full h-[100%] flex flex-col justify-start gap-1 items-center ">
                        {
                            allEventsForDisplay.map((item, key) =>
                                <div key={key}
                                    className=" w-[90%] h-auto p-[5px] bg-thems-allEventsCalendarList rounded-xl flex items-start justify-around flex-row">
                                    <div className=" w-full h-full flex items-center justify-center flex-col">
                                        <div className=" w-full h-full bg-slate-200">
                                            <h1>
                                                Event title
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-200">
                                            <h6>
                                                {item.title}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-center">
                                        <div className=" w-full h-full bg-slate-500">
                                            <h1>
                                                Event start
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-300">
                                            <h6>
                                                {item.start}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-center">
                                        <div className=" w-full h-full bg-slate-500">
                                            <h1>
                                                Event end
                                            </h1>
                                        </div>
                                        <div className=" w-full h-full bg-slate-300">
                                            <h6>
                                                {item.end}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-center pr-[15px]">
                                        <Button
                                            styleButton="lightButton"
                                            secondStyle="alert"
                                            text="Delete" />
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalEvents;