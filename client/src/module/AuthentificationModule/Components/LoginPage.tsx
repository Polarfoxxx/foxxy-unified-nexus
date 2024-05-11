import React from "react";
import { connect } from "react-redux";
import { useInputValue } from "foxxy_input_value";
import { AUTHENTIFICATION_API } from "../../apis/index.";
import { useNavigate } from "react-router-dom";
import { setUserLogData } from "../../../redux";
import { Dispatch } from "redux";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { Type_for_data, Type_for_loginPage } from "./types";
import { LoadingFeedback } from "../../Shared";

function LoginPage({ setUserLogData }: Type_for_loginPage): JSX.Element {
    const navigate = useNavigate();
    const { handleSubmit, reset } = useInputValue();
    const [loadingFeedbackStats, setLoadingFeedbackStats] = React.useState<{ respo_status: number, loadON: boolean }>({
        respo_status: 0,
        loadON: false
    });

    const submit = async (v: TypeForInputsObject["v"]): Promise<void> => {
        const login_data = {
            userNames: v[0].inputValues.toString(),
            password: v[1].inputValues.toString()
        };
        reset();
        setLoadingFeedbackStats({
            respo_status: 10,
            loadON: true
        });
        try {
            const login = await AUTHENTIFICATION_API.loginUser_API(login_data);
            if (login?.jwt) {
                setUserLogData({  // Použití akce setUserLogData
                    userName: login.userName,
                    appTheme: login.theme
                });

                localStorage.setItem("JWT", login.jwt);
                localStorage.setItem("USER_NAME", login.userName);
                navigate("/Content");
            };
            if (login?.status) {
                setLoadingFeedbackStats({
                    respo_status: login.status,
                    loadON: true
                });
            };
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" w-full h-screen flex flex-col bg-loginBackg">
            <div className=" w-full h-1/4 relative">
                {
                    <LoadingFeedback
                        loadstatus={loadingFeedbackStats}
                    />
                }
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
                        <div className="w-full h-10 flex items-center justify-center">
                            <input
                                placeholder="user name"
                                className=" w-[80%] h-10 text-center pl-2 pr-2"
                                name="user"
                                type="text" />
                        </div>
                        <div className="w-full h-10 flex items-center justify-center">
                            <input
                                placeholder="password"
                                className=" w-[80%] h-10 text-center pl-2 pr-2"
                                name="password"
                                type="password" />
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setUserLogData: (data: Type_for_data) => dispatch(setUserLogData(data))
});

export default connect(null, mapDispatchToProps)(LoginPage);
