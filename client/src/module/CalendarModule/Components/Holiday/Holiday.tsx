import React from "react";
import { connect } from "react-redux";
import { Type_RootState } from "../../../../redux";
import { Type_for_holiday } from "./types";
import { Type_for_dayAndHoliday } from "./types";
import { findNextHoliday } from "./services";


function Holiday({ allHoliday }: Type_for_holiday): JSX.Element {
    const [holiday, setHoliday] = React.useState<Type_for_dayAndHoliday>();

    React.useMemo(() => {
        const next_holiday = findNextHoliday(allHoliday);
        if (next_holiday !== null)
            setHoliday(next_holiday);
    }, []);

    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-full h-full bg-thems-background_block flex justify-start items-start flex-col">
                <div className=" w-[auto] h-[40px] gap-0 flex flex-row border-b-2 border-b-slate-400 bg-thems-background_block items-center justify-start pl-4">
                    <div className=" w-[110px] p-1 text-thems-defaultTextColor  flex items-center justify-center bg-thems-minBackg_content rounded-[5px] font-oswald">
                        <h1>
                            Next holiday:
                        </h1>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1>
                            {holiday && new Date(holiday.date).toLocaleDateString()}
                        </h1>
                    </div>
                    <div className=" w-[100px] p-1 flex items-center justify-center">
                        <h1 className=" font-bold">
                            {holiday && holiday.day}
                        </h1>
                    </div>
                </div>
                <div className=" w-full h-auto flex items-start justify-start p-4">
                    <div>
                        <h1>
                            {holiday && holiday.name}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state: Type_RootState) => ({
    allHoliday: state.allHoliday
});

export default connect(mapStateToProps)(Holiday);

