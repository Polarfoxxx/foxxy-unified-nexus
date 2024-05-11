import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../../../apis/cookie";

function LogOut(): JSX.Element {
    const navigate = useNavigate();

    const handleClickLogOut = () => {
      deleteCookie();
        navigate("/LoginPage");
    };

    return (
        <div className=" w-full h-full flex items-center justify-start  p-2 pl-8 ">
            <div>
                <button
                    className=" w-20 h-[25px] text-[14px] text-thems-color_button bg-thems-background_button hover:bg-thems-background_button_hover rounded-md"
                    onClick={handleClickLogOut}>
                    Log out
                </button>
            </div>
           
        </div>
    );
};

export default LogOut;