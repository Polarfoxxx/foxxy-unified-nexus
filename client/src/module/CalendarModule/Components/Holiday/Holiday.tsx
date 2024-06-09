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
        <div className=" w-full h-full">
            {
                <div className=" w-full h-full bg-slate-400 flex justify-start items-center">
                    <div className=" w-[200px] h-[30px] flex flex-row bg">
                        <div>
                            <h1>
                                Next holiday:
                            </h1>
                        </div>
                        <div>
                            <h1>{holiday?.date.toLocaleString()}</h1>
                        </div>
                    </div>
                    <div className=" w-auto h-[30px] flex items-start justify-center flex-col">

                        <div>
                            <h1>{holiday?.name}</h1>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};


const mapStateToProps = (state: Type_RootState) => ({
    allHoliday: state.allHoliday
});

export default connect(mapStateToProps)(Holiday);

