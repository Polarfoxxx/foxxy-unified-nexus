import React from "react";
import { ButtonHTMLAttributes } from "react";
import "./Button_style_light.css";
import "./Button_style_dark.css";

export interface Type_for_ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
    id?: string,
    text: string,

=======
    id: string,
    text: string,
>>>>>>> 86d8c2b0524cdb0e6b3b1584231e30e8e6ded8b3
    styleButton: "lightButton" | "darkButton",
    secondStyle: "primary" | "secondary" | "alert"
};


function Button({ id, text, styleButton, secondStyle, ...props }: Type_for_ButtonElement): JSX.Element {
<<<<<<< HEAD
    const classStyle = `${styleButton} ${secondStyle}`;

    return (
        <button
            id={id}
            className={classStyle}
=======
   const classStyle = `${styleButton} ${secondStyle}`;
   
    return (
        <button 
        id={id}
        className={classStyle}
>>>>>>> 86d8c2b0524cdb0e6b3b1584231e30e8e6ded8b3
            {...props}>
            {text}
        </button>
    );
};

export default Button;