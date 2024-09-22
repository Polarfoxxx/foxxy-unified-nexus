import React from "react";
import { useInputValue } from "foxxy_input_value";
import { logInUser_API } from "../../apis/authentificationAPI";
import { useNavigate } from "react-router-dom";
import { TypeForInputsObject } from "foxxy_input_value/dist/hooks/types/types";
import { LoadingFeedback } from "../../Shared";
import { ButtonComponent, FormComponent } from "foxxy-package";
import "foxxy-package/dist/foxxy_package_dis.css"


function LoginPage(): JSX.Element {
    const navigate = useNavigate();
    const { handleSubmit, reset } = useInputValue();
    const [loadingFeedbackStats, setLoadingFeedbackStats] = React.useState<{ respo_status: number, loadON: boolean }>({
        respo_status: 0,
        loadON: false
    });

    const submit = async (v: TypeForInputsObject["v"]): Promise<void> => {
        console.log(v);

        const login_data = {
            userNames: v[0].inputValues.toString(),
            password: v[1].inputValues.toString()
        };
        reset();
        //! set display stat on loading it is 10.................
        setLoadingFeedbackStats({
            respo_status: 10,
            loadON: true
        });
        try {
            const login = await logInUser_API(login_data);
            if (login?.status === 200) {
                navigate("/Content");
            } else {
                //! handle unsuccessful login..................
                setLoadingFeedbackStats({
                    respo_status: login?.status || 500,
                    loadON: true
                });
            }
        } catch (error) {
            console.log(error);
            setLoadingFeedbackStats({
                respo_status: 500,
                loadON: true
            });
        } 
    };

    return (
        <div className="w-full h-screen flex flex-col bg-loginBackg">
            <div className="w-full h-1/4 relative">
                {
                    //!loading display status.....................
                    <LoadingFeedback
                        loadstatus={loadingFeedbackStats} />
                }
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="min-w-80 w-2/6 h-72 p-2 border-black border flex justify-center items-center flex-col bg-opacity-45 bg-slate-100">
                    <div className="w-full h-24 flex justify-center items-center">
                        <h1 className="text-4xl font-anta">
                            Sign in
                        </h1>
                    </div>
                    <FormComponent.Form
                        custom_background_form="transparent"
                        custom_width_form="100%"
                        onSubmit={(e) => handleSubmit(e, submit)} >
                        <FormComponent.FormHeader />
                        <FormComponent.FormInputs name="userNames" />
                        <FormComponent.FormInputs name="password" />
                        <ButtonComponent.ButtonBox >
                            <ButtonComponent.Button button_text="Sign in" />
                        </ButtonComponent.ButtonBox>
                    </FormComponent.Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;



