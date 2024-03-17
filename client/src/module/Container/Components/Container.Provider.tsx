import React from "react";
import { Type_forContext, Type_forProvider } from "./types";

const Context = React.createContext<Type_forContext>({
    appData: {
        userLogData: {
            userName: "",
            appTheme: ""
        }
    },
    setAppData: () => { },
});


function Provider({ children }: Type_forProvider): JSX.Element {
    const [appData, setAppData] = React.useState<{ userLogData: { userName: string, appTheme: string } }>({
        userLogData: {
            userName: "",
            appTheme: ""
        }
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