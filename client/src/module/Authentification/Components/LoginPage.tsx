import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { AUTHENTIFICATION_API } from "../../apis/index.";
import { useNavigate } from "react-router-dom";

function LoginPage(): JSX.Element {
    const NAVIGATE = useNavigate()
    const { handleSubmit, reset } = useInputValue()
    const submit = (v: TypeForInputsObject["v"]): void => {
        const LOGIN_DATA = {
            userName: v[0].inputValues.toString(),
            password: v[1].inputValues.toString()
        }
        /* reset(); */
        LoginUser(LOGIN_DATA);
    };

    async function LoginUser(loginData: { userName: string, password: string }) {
        try {
            const LOGIN = await AUTHENTIFICATION_API.loginUser_API(loginData);
            console.log(LOGIN);
            
            if(LOGIN?.message === "log") {
            sessionStorage.setItem("key", LOGIN.message)
                NAVIGATE("/Content")
            }
            
        }
        catch (error) {
            console.log(error);

        };
    };




    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, submit)}>
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
                <button
                    type='submit'>
                    click me
                </button>
            </form>
        </div>
    );
};

export default LoginPage;