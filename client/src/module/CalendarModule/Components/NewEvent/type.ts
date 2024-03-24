
export type Type_for_newEventData = {
    startDate: string,
    endDate: string,
    nameEvent: string,
    commentEvent: string,
};


export type Type_for_NewEvent = {
    setNewEventContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
};