import React from "react";
import { connect } from "react-redux";
import { Type_RootState } from "../../../../redux";
import { Type_for_holiday } from "./types";
import { Type_for_dayAndHoliday } from "./types";


function Holiday({ allHoliday }: Type_for_holiday): JSX.Element {
    const [holiday, setHoliday] = React.useState<Type_for_dayAndHoliday>();


    React.useMemo(() => {
        const date = new Date();



    }, []);

    return (
        <div className=" w-full h-full">

        </div>
    );
};


const mapStateToProps = (state: Type_RootState) => ({
    allHoliday: state.allHoliday
});

export default connect(mapStateToProps)(Holiday);

