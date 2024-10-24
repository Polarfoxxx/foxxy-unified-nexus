import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../APIs/cookie";
import { logOutUser_API } from "../../../APIs/authentificationAPI";
import { ButtonComponent } from 'foxxy-package';
import "foxxy-package/dist/foxxy_package_dis.css"



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
                <ButtonComponent.ButtonBox>
                    <ButtonComponent.Button
                        button_text='my button'
                        variant_btn='alertButton'
                        onClick={handleClickLogOut} />
                </ButtonComponent.ButtonBox>
            </div>
        </div>
    );
};

export default LogOut;