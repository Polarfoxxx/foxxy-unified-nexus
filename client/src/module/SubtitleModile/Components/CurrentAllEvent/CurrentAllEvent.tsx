import React from "react"
import { Container } from "../../../Container"

function CurrentAllEvent(): JSX.Element {
    const { appData } = React.useContext(Container.Context);
    const [eventCounter, setEventCounter] = React.useState(0);

    React.useEffect(() => {
        setEventCounter(appData.allEvents.length)
    }, [appData.allEvents.length])

    return (
        <div className=" w-full h-full p-1 bg-thems-minBackg_content rounded-full flex items-center justify-center ">
            <div className=" w-[80%] h-full flex items-center justify-center flex-row gap-2">
                <div className="w-full h-full flex justify-center items-center">
                    <h3 className=" text-thems-defaultTextColor">
                        All events:
                    </h3>
                </div>
                <div className="w-[30%] h-full flex justify-center items-center">
                <h3 className=" text-thems-defaultTextColor">
                        {eventCounter}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CurrentAllEvent