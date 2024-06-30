import { InputHTMLAttributes } from "react";
<<<<<<< HEAD
import "./Input_style_light.css"
import "./Input_style_dark.css"
=======
>>>>>>> 86d8c2b0524cdb0e6b3b1584231e30e8e6ded8b3


export interface Type_for_InputElement extends InputHTMLAttributes<HTMLInputElement> {
    id?: string,
<<<<<<< HEAD
    value?: string | number,
    type: string,
    name: string,
    placeholder: string,
=======
    value?: string| number,
    type: string,
    name: string,
    placeholder:string,
>>>>>>> 86d8c2b0524cdb0e6b3b1584231e30e8e6ded8b3
    styleInput: "lightInput" | "darkInput",
    secondStyle: "primary" | "secondary" | "alert"
};

<<<<<<< HEAD
function Input({ id, value, type, name, placeholder, styleInput, secondStyle, ...props }: Type_for_InputElement): JSX.Element {
    const classStyle = `${styleInput} ${secondStyle}`;

    return (
        <input
            className={classStyle}
            value={value}
            placeholder={placeholder}
=======
function Input({ id,value, type, name,placeholder, styleInput, secondStyle, ...props }: Type_for_InputElement): JSX.Element {
    return (
        <input
        value={value}
        placeholder={placeholder}
>>>>>>> 86d8c2b0524cdb0e6b3b1584231e30e8e6ded8b3
            type="text"
            name={name}
            id={id}
            {...props}
        />
    );
};

export default Input;