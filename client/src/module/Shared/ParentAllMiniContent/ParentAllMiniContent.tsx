import { useNavigate } from "react-router-dom";
import React from "react";
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
            className='absolute w-screen h-screen bg-slate-50 bg-opacity-70  left-0 top-0 z-[999] flex items-center justify-center'>
            <div className=" w-[95%] h-[95%] border-2 border-black rounded-[40px] overflow-hidden">
                {
                    props.children
                }
            </div>
        </div>
    )
};

export default ParentAllMiniContent;