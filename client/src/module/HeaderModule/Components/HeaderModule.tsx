import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderModule(): JSX.Element {
    const NAVIGATE = useNavigate();

    const handleClickLogOut = () => {
        sessionStorage.removeItem("jwt")
        NAVIGATE("/LoginPage")
    }


    return (
        <div className=" w-full h-full flex items-center justify-center flex-row p-2">
            <div>
                <button onClick={handleClickLogOut}>Log out</button>
            </div>
            <div>
                <h1 className=" text-3xl font-sans from-neutral-200">
                    Send message to mongo database
                </h1>
            </div>
        </div>
    );
};

export default HeaderModule;