import { Type_forCalEvents } from "./types";



function CalEvents(props: Type_forCalEvents): JSX.Element {


    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-thems-background_block flex justify-start items-start flex-col shadow-maxShadow p-1">
                <div className=" w-[auto] h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-transparent items-center justify-start pl-4">
                    <div className=" w-[110px] h-[35px] text-thems-defaultTextColor flex items-center justify-center bg-thems-minBackg_content rounded-[5px]">
                       <div className=" w-[50px] h-5 bg-black text-center">
<p>events</p>
                       </div>
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
                    <div className=" w-full h-[100%] flex flex-col justify-start gap-1 items-center">
                        {
                            props.allEvents.map((item, key) =>
                                <div key={key}
                                    className=" w-[90%] h-auto p-[5px] bg-slate-300 rounded-xl flex items-start justify-around">
                                    <div className=" w-full h-full flex items-center justify-center">
                                        <h6>{item.title}</h6>
                                    </div>
                                    <div className=" w-full h-full flex items-center justify-end pr-[15px]">
                                    <button className=" w-[200px] h-[80px] bg-thems-background_button">
Logout
                                    </button>
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