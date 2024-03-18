import React from "react";

function TittleBarModule(): JSX.Element {
    const [screenButtonContent, setScreenButtonContent] = React.useState("FullScreen");

    return (
        <div className="w-full h-full flex justify-center items-center bg-thems-background_header ">
        </div>
    );
};

export default TittleBarModule;