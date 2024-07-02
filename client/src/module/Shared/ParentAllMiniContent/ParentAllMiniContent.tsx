import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../../../bookComponents/Button";

export type Type_for_ParentAllMiniContent = {
    children: JSX.Element
};

function ParentAllMiniContent(props: Type_for_ParentAllMiniContent): JSX.Element {
    const NAVIGATE = useNavigate();

    const handleClickHomePage = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            NAVIGATE("/Content");
        };
    };

    return (
        <div
            onClick={handleClickHomePage}
            className='absolute w-screen h-screen bg-slate-50 bg-opacity-70  left-0 top-0 z-[998] flex items-center justify-center shadow-miniApp'>
            <div className=" w-[90%] h-[90%] border-2 border-black rounded-[30px] overflow-hidden relative">
                <div className=" w-auto h-auto absolute right-[40px] top-[15px]">
                    <Button 
                    styleButton="lightButton"
                    secondStyle="alert"
                    text="Close"
                    onClick={handleClickHomePage}/>                     
                </div>
                {
                    props.children
                }
            </div>
        </div>
    )
};

export default ParentAllMiniContent;