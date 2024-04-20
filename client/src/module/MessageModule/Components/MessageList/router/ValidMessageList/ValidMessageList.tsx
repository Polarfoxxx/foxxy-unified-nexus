import React from "react";
import { Type_for_valid_and_invalidMessageList } from "../types";
import { ItemMessage } from "../ItemsMessage";
import { Type_for_newMesssageFrom_DB } from "../../types";


function ValidMessageList(props: Type_for_valid_and_invalidMessageList): JSX.Element {
    const [validList, setValidList] = React.useState<Type_for_newMesssageFrom_DB[]>([]);

    React.useEffect(() => {
        if (props.messageList.length > 0) {
            const INV_DATA = props.messageList.filter((item) => {
                return item.status === true;
            });
            setValidList(INV_DATA);
        };
    }, [props.messageList]);


    return (
        <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col">
            <div className="w-[100%] h-[7%] flex justify-end items-center bg-thems-currentMessCount_Background pl-5 pr-5 gap-4">
                <h2 className=" text-thems-defaultTextColor">
                    Current message in linst:
                </h2>
                <span className=" text-thems-defaultTextColor text-[25px]">
                    {validList.length}
                </span>
            </div>
            <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col  p-6 ">
                {
                    validList.map((item, key) =>
                        <div
                            style={key === 0 ? { borderRadius: "20px 20px 0 0" } : key === validList.length - 1 ?
                                { borderRadius: "0 0 20px 20px" } : { borderRadius: "0px" }}
                            className=" w-[80%] h-[120px] rounded-tr-[0px] bg-thems-item_Background cursor-pointer overflow-hidden  border-2 border-t-indigo-900"
                            key={key}>
                            <ItemMessage
                                keyType={key}
                                itemData={item} />
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ValidMessageList;