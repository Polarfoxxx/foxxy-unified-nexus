import React from "react";
import { Container } from "../../../ContainerModule";


function TittleBar(): JSX.Element {
    const { appData } = React.useContext(Container.Context);

    return (
        <div className="w-full h-full flex justify-center items-center bg-transparent ">
            <div>
                <h1 className=" text-3xl font-anta text-thems-defaultTextColorDark">
                    Welcome  {appData.userLogData.userName}
                </h1>
            </div>
        </div>
    );
};

export default TittleBar;