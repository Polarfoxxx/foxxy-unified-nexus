import React from "react";
import { Type_forContext, Type_forProvider,Type_for_appDataFromProvider } from "./types";

const Context = React.createContext<Type_forContext>({
    appData: {
        userLogData: {
            userName: "",
            appTheme: ""
        },
        allEvents: []
    },
    setAppData: () => { },
});

function Provider({ children }: Type_forProvider): JSX.Element {
    const [appData, setAppData] = React.useState<Type_for_appDataFromProvider>({
        userLogData: {
            userName: "",
            appTheme: ""
        },
        allEvents: []
    });

    return (
        <Context.Provider value={{ appData, setAppData }}>
            {children}
        </Context.Provider>
    );
};

const Container = {
    Provider,
    Context
};

export default Container;