import React from "react";
import NewMessage from "../NewMessage/NewMessage";

function MessageList(): JSX.Element {
    const [newMessageContent, setNewMessageContent] = React.useState<JSX.Element | null>(null);
    const [messageList, setMessageList] = React.useState<any[]>([]);

    const handleClickCreateNewMesssage = (): void => {
        setNewMessageContent(<NewMessage setNewMessageContent= {setNewMessageContent}/>)
    };



    return (
        <div>
            <div>
                <button
                    onClick={handleClickCreateNewMesssage}
                >create new message</button>
            </div>
            <div>
                {newMessageContent}
            </div>
            <div>
                {
                    messageList.map((item, key) =>
                        <div key={key}>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MessageList;