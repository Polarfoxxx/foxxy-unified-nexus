import { format } from 'date-fns';
import React from 'react';


type Type_forNewMessageProps = {
    setNewMessageContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

function NewMessage(props: Type_forNewMessageProps): JSX.Element {
    const [createDate, setCreateDate] = React.useState("");

    const handleClickCreateMessage = (): void => {
        props.setNewMessageContent(null);
    }

    const handleFocus = (): void => {
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'dd.MM.yyyy HH:mm:ss');
        setCreateDate(formattedDate)

    }

    return (
        <div className=' w-full'>
            <form >
                <div>
                    <input
                    className=' border border-black'
                        type="text"
                        onFocus={handleFocus}
                        placeholder='nameMessage' />
                </div>
                <div>
                    <input
                        value={createDate}
                        type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <button
                    onClick={handleClickCreateMessage}
                >create</button>
            </form>
        </div>
    );
};

export default NewMessage
