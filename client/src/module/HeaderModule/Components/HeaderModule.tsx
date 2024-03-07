import React from "react"

function HeaderModule(): JSX.Element {

    return (
        <div className=" w-full h-full flex items-center justify-start p-2">
            <h1 className=" text-3xl font-sans from-neutral-200">
                Send message to mongo database
            </h1>
        </div>
    );
};

export default HeaderModule;