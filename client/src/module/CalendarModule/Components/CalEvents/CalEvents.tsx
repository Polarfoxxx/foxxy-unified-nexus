
function CalEvents(): JSX.Element {
    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-thems-background_block flex justify-start items-start flex-col">
                <div className=" w-[auto] h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-thems-background_block items-center justify-start pl-4">
                    <div className=" w-[110px] p-1 text-thems-defaultTextColor  flex items-center justify-center bg-thems-minBackg_content rounded-[5px] font-oswald">
                        <h1>
                            Next event:
                        </h1>
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
                <div className=" w-full h-auto flex items-start justify-start p-4">
                    <div>
                        <h1>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalEvents;