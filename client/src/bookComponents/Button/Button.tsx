import React from "react";
import { ButtonHTMLAttributes } from "react";
import "./Button_style_light.css";
import "./Button_style_dark.css";

export interface Type_for_ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string,
    text: string,
    styleButton: "lightButton" | "darkButton",
    secondStyle: "primary" | "second" | "alert"
};


function Button({ className, text, styleButton,secondStyle, ...props }: Type_for_ButtonElement): JSX.Element {
    return (
        <button 
        id={styleButton, secondStyle}
        className={className}
            {...props}>
            {text}
        </button>
    );
};

export default Button;