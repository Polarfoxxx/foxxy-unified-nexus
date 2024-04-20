import React from "react";
import { Type_for_valid_and_invalidMessageList } from "../types";
import { ItemMessage } from "../ItemsMessage";
import { Type_for_newMesssageFrom_DB } from "../../types";

function InvalidMessageList(props: Type_for_valid_and_invalidMessageList): JSX.Element {
    const [invalidList, setInvalidList] = React.useState<Type_for_newMesssageFrom_DB[]>([]);
    const [animationStyles, setAnimationStyles] = React.useState<React.CSSProperties[]>([]);

    React.useEffect(() => {
        if (props.messageList.length > 0) {
            const INV_DATA = props.messageList.filter((item) => {
                return item.status !== true;
            });
            setInvalidList(INV_DATA);
            // Apply animation effect when the list updates
            applyAnimationEffect(INV_DATA);
        };
    }, [props.messageList]);

    const applyAnimationEffect = async (list: Type_for_newMesssageFrom_DB[]) => {
        const newAnimationStyles: React.CSSProperties[] = [];
        await Promise.all(list.map(async (_, index) => {

            // Delay each animation based on index
            await new Promise(resolve => setTimeout(resolve, (index + 1) * 300));
            // Apply the animation styles

            newAnimationStyles[index] = {
                transition: "left 2s",
                position: "relative",
                left: "0px",
            };
            setAnimationStyles([...newAnimationStyles]); // Update the animation styles
        }));
    };

    return (
        <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col">
            <div className="w-[100%] h-[7%] flex justify-end items-center bg-thems-currentMessCount_Background pl-5 pr-5 gap-4">
                <h2 className=" text-thems-defaultTextColor">
                    Current message in linst:
                </h2>
                <span className=" text-thems-defaultTextColor text-[25px]">
                    {invalidList.length}
                </span>
            </div>
            <div className=" w-[100%] h-[100%] flex justify-start items-center gap-1 flex-col p-6 relative overflow-x-hidden">
                {
                invalidList.map((item, key) => (
                    <div
                        style={{
                            borderRadius: key === 0 ? "20px 20px 0 0" : key === invalidList.length - 1 ? "0 0 20px 20px" : "0px",
                            ...animationStyles[key] // Apply animation styles
                        }}
                        className="relative left-[100%] w-[80%] h-[120px] rounded-tr-[0px] bg-thems-item_Background cursor-pointer overflow-hidden flex border-2 border-t-indigo-900"
                        key={key}
                    >
                        <ItemMessage keyType={key} itemData={item} />
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default InvalidMessageList;
