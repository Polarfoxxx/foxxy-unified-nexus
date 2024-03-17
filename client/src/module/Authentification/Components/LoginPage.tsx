import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { AUTHENTIFICATION_API } from "../../apis/index.";
import { useNavigate } from "react-router-dom";
import { Container } from "../../Container";

function LoginPage(): JSX.Element {
    const NAVIGATE = useNavigate();
    const { setAppData } = React.useContext(Container.Context);
    const { handleSubmit, reset } = useInputValue()
    const submit = (v: TypeForInputsObject["v"]): void => {
        const LOGIN_DATA = {
            userNames: v[0].inputValues.toString(),
            password: v[1].inputValues.toString()
        }
        /* reset(); */
        LoginUser(LOGIN_DATA);
    };
    async function LoginUser(loginData: { userNames: string, password: string }) {
        try {
            const LOGIN = await AUTHENTIFICATION_API.loginUser_API(loginData);
            if (LOGIN?.jwt) {
                const DATA_FOR_SESSIONSTORAGE = {
                    userName: LOGIN.userName,
                    appTheme: LOGIN.theme
                };
                setAppData({
                    userLogData: DATA_FOR_SESSIONSTORAGE
                });
                sessionStorage.setItem("JWT", LOGIN.jwt);
                NAVIGATE("/Content");
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