
export type Type_for_newEventFor_API = {
    event: {
        startDate: Date,
        endDate: Date,
        nameEvent: string,
        commentEvent: string,
    }
};

export type Type_for_newEventFrom_DB = {
        startDate: Date,
        endDate: Date,
        nameEvent: string,
        commentEvent: string,
};

export type Type_for_NewEvent = {
    setNewEventContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
};