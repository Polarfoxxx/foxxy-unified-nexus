import React from "react";
import { ButtonHTMLAttributes } from "react";
import "./Button_style_light.css";
import "./Button_style_dark.css";

export interface Type_for_ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string,
    text: string,
    styleButton: "lightButton" | "darkButton",
    secondStyle: "primary" | "secondary" | "alert"
};


function Button({ id, text, styleButton, secondStyle, ...props }: Type_for_ButtonElement): JSX.Element {
   const classStyle = `${styleButton} ${secondStyle}`;
   
    return (
        <button 
        id={id}
        className={classStyle}
            {...props}>
            {text}
        </button>
    );
};

export default Button;