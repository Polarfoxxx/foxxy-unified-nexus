import { Type_for_newMesssageFrom_DB } from "../../types";
import React from "react";
import { Type_for_ItemMessage, services_messageColorAlert } from "../";
import { Container } from "../../../../../ContainerModule";
import { deleteData_API } from "../../../../../apis/index.";


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
                status: props.itemData.status
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
            className=" w-[100%] h-[100px] flex justify-center items-center flex-row  bg-thems-item_Background  ">
            <div className=" w-[100%] h-[100%] flex items-center justify-center flex-col">
                {/* tittle */}
                <div className=" w-[100%] h-[30%] flex flex-row justify-start items-center">
                    <div className="w-[10%] h-[100%] flex flex-row justify-center items-center text-[16px]">
                        <h2>
                            {props.keyType + 1}
                        </h2>
                    </div>
                    <div className="w-[30%] h-[100%] flex flex-row justify-center items-center text-[14px]">
                        <h2>
                            {itemMessageData?.start_message.toLocaleString()}
                        </h2>
                    </div>
                    <div className="w-[100%] h-[100%] flex flex-row justify-center items-center text-[14px]">
                        <h2>
                            {itemMessageData?.title_message}
                        </h2>
                    </div>
                </div>
                {/* content */}
                <div className=" w-[100%] h-[100%] text-[14px] p-3">
                    <p>
                        {itemMessageData?.content_message}
                    </p>
                </div>
            </div>
            <div className=" w-[20%] h-[100%] flex items-center justify-center flex-col">
                <div className=" w-[100%] h-[100%] flex items-center justify-center flex-row">
                    <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                        <button onClick={handleClickDeleteItem}>
                            delete
                        </button>
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center text-[14px]">
                        <button >
                            complete
                        </button>
                    </div>
                </div>
                <div className=" w-[100%] h-[100%] flex items-center justify-center">
                    <div
                        className=" w-[100%] h-[100%] flex items-center justify-center">
                        <div
                            style={colorAlert}
                            className=" w-[150px] h-[30px] flex items-center justify-center rounded-2xl text-[14px]">
                            <h1 className="text-[14px]">
                                {itemMessageData?.end_message.toLocaleDateString()}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemMessage;