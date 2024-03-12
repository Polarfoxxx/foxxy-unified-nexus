import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";



function LoginPage(): JSX.Element {
    const { handleSubmit, reset } = useInputValue()

    const submit = (v: TypeForInputsObject["v"]): void => {
      console.log(v);
    };
    return (
        <div>
            <form   onSubmit={(e) => handleSubmit(e, submit)}>
                <div>
                    <input 
                    name="user"
                    type="text" />
                </div>
                <div>
                    <input
                    name="password"
                    type="text" />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;