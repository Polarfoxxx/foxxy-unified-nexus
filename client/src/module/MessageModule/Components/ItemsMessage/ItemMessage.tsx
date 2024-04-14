import { Type_for_newMesssageFrom_DB } from "../MessageList";
import React from "react";
import { Type_for_ItemMessage, services_messageColorAlert } from "../";
import { Container } from "../../../ContainerModule";
import { deleteData_API } from "../../../apis/index.";


function ItemMessage(props: Type_for_ItemMessage): JSX.Element {
    const { appData, setAppData } = React.useContext(Container.Context);
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
        const updateColorAlert = (): void => {
            if (itemMessageData) {
                setColorAlert(services_messageColorAlert({ itemMessageData }))
            };
        };
        updateColorAlert();
        const intervalId = setInterval(updateColorAlert, 60000); /* polhodina */
        return () => clearInterval(intervalId);
    }, [itemMessageData?.end_message]);


    const handleClickDeleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { itemData } = props;
        deleteAsyncData(itemData);
    };

    async function deleteAsyncData(DELETE_DATA: Type_for_newMesssageFrom_DB) {
        const USER_NAME = appData.userLogData.userName;
        try {
            const DELETE = await deleteData_API({ USER_NAME, DELETE_DATA });
            if (DELETE?.updateMessages) {
                setAppData(prevAppData => ({
                    ...prevAppData,
                    allMessage: DELETE.updateMessages
                }));
            };
        }
        catch (error) {
            console.log(error);
        };
    };


    return (
        <div
            key={props.keyType}
            className=" w-[100%] h-[100%] flex justify-center items-center flex-row">
            <div className="w-[20%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-start pl-2 pr-2 bg-thems-itemHeader_Background">
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center pl-2 pr-2">
                    <h1>{props.keyType + 1}</h1>
                </div>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-start pl-2 pr-2 bg-thems-itemHeader_Background">
                    <h1>Created</h1>
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center pl-2 pr-2">
                    <h3>{itemMessageData?.start_message.toLocaleString()}</h3>
                </div>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-start pl-2 pr-2 bg-thems-itemHeader_Background">
                    <h1>Title message</h1>
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center pl-2 pr-2">
                    <h3>{itemMessageData?.title_message}</h3>
                </div>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-start pl-2 pr-2 bg-thems-itemHeader_Background">
                    <h1>Content message</h1>
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center pl-2 pr-2">
                    <h3>{itemMessageData?.content_message}</h3>
                </div>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-start pl-2 pr-2 bg-thems-itemHeader_Background">
                    <h1>Message termin</h1>
                </div>
                <div
                    style={colorAlert}
                    className=" w-[100%] h-[100%] flex items-center justify-center pl-2 pr-2">
                    <h3>{itemMessageData?.end_message.toLocaleString()}</h3>
                </div>
            </div>
            <div className="w-[60%] h-[100%] flex items-center justify-center">
                < div className="w-[100%] h-[100%] flex items-center justify-center">
                    <button
                        onClick={handleClickDeleteItem}>
                        Delete
                    </button>
                </div>
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