import React from "react";

function TittleBarModule(): JSX.Element {
    const [screenButtonContent, setScreenButtonContent] = React.useState("FullScreen");

    const handleClickWindowSizeButton = (): void => {
        const SCREEN_WIDTH = window.screen.width;
        const SCREEN_HEIGHT = window.screen.height;
        const APP_WIDTH = 1500;
        const APP_HEIGHT = 800;

        const IS_FULL_SCREEN = (screenButtonContent === "Full screen");
        console.log(IS_FULL_SCREEN);

        if (IS_FULL_SCREEN) {
            window.resizeTo(SCREEN_WIDTH, SCREEN_HEIGHT);
            setScreenButtonContent("Default size");
        } else {
            window.resizeTo(APP_WIDTH, APP_HEIGHT);
            const left = (SCREEN_WIDTH - APP_WIDTH) / 2;
            const top = (SCREEN_HEIGHT - APP_HEIGHT) / 2;
            window.moveTo(left, top);
            setScreenButtonContent("Full screen");
        }
    };

    const handleClickCloseButton = (): void => {
        window.close();
    };

    return (
        <div className="w-full h-full flex flex-row justify-center items-center  ">
            <div className="w-full h-full flex flex-row justify-center items-center">
                <button
                    onClick={handleClickWindowSizeButton}
                    className=" w-28 border bg-black border-black rounded-md hover:bg-blue-700 text-white">
                    {screenButtonContent}
                </button>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <button
                    onClick={handleClickCloseButton}
                    className="w-28 border bg-black border-black rounded-md hover:bg-blue-700 text-white">
                    Close
                </button>
            </div>
        </div>
    );
};

export default TittleBarModule;