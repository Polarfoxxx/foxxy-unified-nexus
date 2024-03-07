import React from "react";
import { Type_forContext, Type_forProvider } from "./types";

const Context = React.createContext<Type_forContext>({
    appData: "",
    setAppData: () => { },
});

function Provider({ children }: Type_forProvider): JSX.Element {
    const [appData, setAppData] = React.useState<string>("");
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