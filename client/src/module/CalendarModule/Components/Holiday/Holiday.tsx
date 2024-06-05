import React from "react";
import { connect } from "react-redux";
import { Type_RootState } from "../../../../redux";
import { Type_for_holiday } from "./types";


function Holiday({allHoliday}: Type_for_holiday): JSX.Element {
    return(
        <div>

        </div>
    );
};


const mapStateToProps = (state: Type_RootState) => ({
    allHoliday: state.allHoliday
});

export default connect(mapStateToProps)(Holiday);

