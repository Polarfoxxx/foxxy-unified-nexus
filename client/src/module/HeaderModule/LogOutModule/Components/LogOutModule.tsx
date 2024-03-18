import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../Container";

function LogOutModule(): JSX.Element {
    const { appData } = React.useContext(Container.Context);
    const NAVIGATE = useNavigate();

    const handleClickLogOut = () => {
        sessionStorage.removeItem("JWT")
        NAVIGATE("/LoginPage");
    };


    return (
        <div className=" w-full h-full flex items-center justify-between flex-row p-2 pl-8 ">
            <div>
                <button
                    className=" w-20 h-8 text-thems-color_button bg-thems-background_button hover:bg-slate-400"
                    onClick={handleClickLogOut}>
                    Log out
                </button>
            </div>
            <div>
                <h1 className=" text-3xl font-anta text-thems-defaultTextColor">
                    Welcome  {appData.userLogData.userName}
                </h1>
            </div>
        </div>
    );
};

export default LogOutModule;