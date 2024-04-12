import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../ContainerModule";

function LogOut(): JSX.Element {
    const { appData } = React.useContext(Container.Context);
    const NAVIGATE = useNavigate();

    const handleClickLogOut = () => {
        localStorage.removeItem("JWT")
        localStorage.removeItem("USER_NAME")
        NAVIGATE("/LoginPage");
    };


    return (
        <div className=" w-full h-full flex items-center justify-start  p-2 pl-8 ">
            <div>
                <button
                    className=" w-20 h-8 text-thems-color_button bg-thems-background_button hover:bg-thems-background_button_hover rounded-md"
                    onClick={handleClickLogOut}>
                    Log out
                </button>
            </div>
           
        </div>
    );
};

export default LogOut;