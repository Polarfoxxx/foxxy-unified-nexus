export type Type_forProvider = {
    children: JSX.Element | JSX.Element[]
};
export type Type_forContext = {
    appData: { userLogData: { userName: string, appTheme: string } },
    setAppData: React.Dispatch<React.SetStateAction<{ userLogData: { userName: string, appTheme: string } }>>
};
