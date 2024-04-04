import React from "react";
import { useInputValue } from "foxxy_input_value";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { AUTHENTIFICATION_API } from "../../apis/index.";
import { useNavigate } from "react-router-dom";
import { Container } from "../../ContainerModule";
import { Type_for_LoginUser } from "./types";

function LoginPage(): JSX.Element {
    const NAVIGATE = useNavigate();
    const { appData, setAppData } = React.useContext(Container.Context);
    const { handleSubmit, reset } = useInputValue();

    const submit = (v: TypeForInputsObject["v"]): void => {
        const LOGIN_DATA = {
            userNames: v[0].inputValues.toString(),
            password: v[1].inputValues.toString()
        }
         reset();
        LoginUser(LOGIN_DATA);
    };

    async function LoginUser(loginData: Type_for_LoginUser) {
        try {
            const LOGIN = await AUTHENTIFICATION_API.loginUser_API(loginData);
            if (LOGIN?.jwt) {
                const DATA_FOR_SESSIONSTORAGE = {
                    userName: LOGIN.userName,
                    appTheme: LOGIN.theme
                };
                setAppData(prevAppData => ({
                    ...prevAppData,
                    userLogData: DATA_FOR_SESSIONSTORAGE
                }));
                sessionStorage.setItem("JWT", LOGIN.jwt);
                NAVIGATE("/Content");
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <div className=" w-full h-screen  flex flex-col bg-loginBackg">
            <div className=" w-full h-1/4">
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className=" min-w-80 w-2/6  h-72 p-2 border-black border flex justify-center items-center flex-col bg-opacity-45 bg-slate-100"  >
                    <div className=" w-full h-24 flex justify-center items-center">
                        <h1 className=" text-4xl font-anta">
                            Sign in
                        </h1>
                    </div>
                    <form
                        className="w-full h-full p-2 flex justify-center items-center  
                                    flex-col gap-2 "
                        onSubmit={(e) => handleSubmit(e, submit)}>
                        <div className="w-full h-10">
                            <input
                                placeholder="user name"
                                className=" w-full h-10 text-center pl-2"
                                name="user"
                                type="text" />
                        </div>
                        <div className="w-full h-10">
                            <input
                                placeholder="password"
                                className=" w-full h-10 text-center pl-2"
                                name="password"
                                type="text" />
                        </div>
                        <button
                            className=" w-24 h-8 mt-4 font-bold text-xl hover:text-blue-700"
                            type='submit'>
                            Sign in
                        </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default LoginPage;