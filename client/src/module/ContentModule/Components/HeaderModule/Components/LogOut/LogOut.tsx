import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../../../apis/cookie";
import { logOutUser_API } from "../../../../../apis/authentificationAPI";


function LogOut(): JSX.Element {
    const navigate = useNavigate();

    const handleClickLogOut = () => {
        deleteCookie();
        logOutUser_API()
        navigate("/LoginPage");
    };

    return (
        <div className=" w-full h-full flex items-center justify-start  p-2 pl-8 ">
            <div>
                <button className="">
                    Logout
                </button>
            </div>

        </div>
    );
};

export default LogOut;