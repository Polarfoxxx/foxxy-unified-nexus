import { InputHTMLAttributes } from "react";
import "./Input_style_light.css"
import "./Input_style_dark.css"


export interface Type_for_InputElement extends InputHTMLAttributes<HTMLInputElement> {
    id?: string,
    value?: string | number,
    type: string,
    name: string,
    placeholder: string,
    styleInput: "lightInput" | "darkInput",
    secondStyle: "primary" | "secondary" | "alert"
};

function Input({ id, value, type, name, placeholder, styleInput, secondStyle, ...props }: Type_for_InputElement): JSX.Element {
    const classStyle = `${styleInput} ${secondStyle}`;

    return (
        <input
            className={classStyle}
            value={value}
            placeholder={placeholder}
            type="text"
            name={name}
            id={id}
            {...props}
        />
    );
};

export default Input;