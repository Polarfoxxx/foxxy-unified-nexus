

type Type_forNewMessageProps = {
    setNewMessageContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

function NewMessage(props: Type_forNewMessageProps): JSX.Element {

    const handleClickCreateMessage = (): void => {
        props.setNewMessageContent(null)
    }

    return (
        <div>
            <form action="">
                <input type="text" />
                <button
                    onClick={handleClickCreateMessage}
                >create</button>
            </form>
        </div>
    );
};

export default NewMessage
