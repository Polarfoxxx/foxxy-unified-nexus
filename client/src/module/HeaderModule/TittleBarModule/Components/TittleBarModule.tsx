import React from "react";
import { Container } from "../../../Container";


function TittleBarModule(): JSX.Element {
    const { appData } = React.useContext(Container.Context);
    const [screenButtonContent, setScreenButtonContent] = React.useState("FullScreen");

    return (
        <div className="w-full h-full flex justify-center items-center bg-thems-background_header ">
            <div>
                <h1 className=" text-3xl font-anta text-thems-defaultTextColor">
                    Welcome  {appData.userLogData.userName}
                </h1>
            </div>
        </div>
    );
};

export default TittleBarModule;