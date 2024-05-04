import React from "react";
import { connect } from "react-redux";
import { Type_RootState } from "../../../../../../redux";
import { Type_tittleBar } from "./types";


function TittleBar({ userName }: Type_tittleBar): JSX.Element {

    return (
        <div className="w-full h-full flex justify-center items-center bg-transparent ">
            <div>
                <h1 className=" text-2xl font-anta text-thems-defaultTextColorDark">
                    Welcome back {userName}
                </h1>
            </div>
        </div>
    );
};


const mapStateToProps = (state: Type_RootState) => ({
    userName: state.userLogData.userName,
});

export default connect(mapStateToProps)(TittleBar);
