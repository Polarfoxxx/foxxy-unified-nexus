import { Type_for_newMesssageFrom_DB } from "../MessageList";
import React from "react";
import { Type_for_ItemMessage, services_messageColorAlert } from "../";


function ItemMessage(props: Type_for_ItemMessage): JSX.Element {
    const [itemMessageData, setItemMessageData] = React.useState<Type_for_newMesssageFrom_DB>();
    const [colorAlert, setColorAlert] = React.useState<React.CSSProperties>();

    React.useEffect(() => {
        if (props.itemData.content_message) {
            setItemMessageData({
                start_message: new Date(props.itemData.start_message),
                end_message: new Date(props.itemData.end_message),
                title_message: props.itemData.title_message,
                content_message: props.itemData.content_message,
            });
        };
    }, [JSON.stringify(props.itemData)]);


    React.useEffect(() => {
        const updateColorAlert = () => {
            if (itemMessageData) {
                setColorAlert(services_messageColorAlert({ itemMessageData }))
            };
        };
        updateColorAlert();
        const intervalId = setInterval(updateColorAlert, 1800000); /* polhodina */
        return () => clearInterval(intervalId);
    }, [itemMessageData?.end_message]);

    return (
        <div
            style={colorAlert}
            className=" w-[100%] h-[100%] flex justify-center items-center flex-row">
            <div className="w-[100%] h-[100%] flex items-center justify-center">
                <div>
                    <h1>Created</h1>
                </div>
                <div>
                    <h3>{itemMessageData?.start_message.toLocaleString()}</h3>
                </div>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
                <h3>{itemMessageData?.title_message}</h3>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
                <h3>{itemMessageData?.content_message}</h3>
            </div>
            < div className="w-[100%] h-[100%] flex items-center justify-center">
                <h3>{itemMessageData?.end_message.toLocaleString()}</h3>
            </div>
            < div className="w-[100%] h-[100%] flex items-center justify-center">
                <button>
                    Delete
                </button>
                < div className="w-[100%] h-[100%] flex items-center justify-center">
                    <button>
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemMessage;