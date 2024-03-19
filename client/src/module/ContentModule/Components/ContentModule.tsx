import React from "react";
import "./style/content_style.css";
import { servicesJWTdecodeAndValidity } from "../../utils";
import { useNavigate } from "react-router-dom";
import { LogOutModule } from "../../HeaderModule/LogOutModule";
import { TittleBarModule } from "../../HeaderModule/TittleBarModule";
import { CalendarModule } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ColorSwitcher } from "../../HeaderModule/ColorSwitcher";
import { SubtitleModule } from "../../SubtitleModile";

function ContentModule(): JSX.Element {
    const NAVIGATE = useNavigate();
    const themedDivRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const JWT = sessionStorage.getItem("JWT");
        if (JWT !== null) {
            servicesJWTdecodeAndValidity(JWT) ? NAVIGATE("/Content") : NAVIGATE("/LoginPage")
        } else {
            NAVIGATE("/LoginPage")
        };
    }, [NAVIGATE]);


    return (
        <div
            ref={themedDivRef}
            data-theme=""
            className=" w-full h-full flex flex-col justify-center items-center">
            <header className=" w-full h-28  bg-thems-background_header flex flex-col justify-center items-center">
                <div className=" w-full h-full flex flex-row border border-red-600">
                    <div className=" w-full min-w-64 h-full flex items-center justify-center ">
                        <LogOutModule />
                    </div>
                    <div className=" w-2/4 min-w-64 min-h-full flex items-center justify-center ">
                        <TittleBarModule />
                    </div>
                    <div className="w-full min-w-64 min-h-full flex items-center justify-center">
                        <ColorSwitcher themedDivRef={themedDivRef} />
                    </div>
                </div>
                <div className="w-full h-1/2 bg-orange-100 border border-red-100">
                    <SubtitleModule />
                </div>
            </header>
            <article className=" w-full h-auto p-5 bg-thems-background_content">
                <div>
                    <CalendarModule />
                </div>
            </article>
            <footer className=" w-full h-auto bg-green-600">
                <div>
                    <MessageList />
                </div>
            </footer>
        </div>
    )
};

export default ContentModule;

