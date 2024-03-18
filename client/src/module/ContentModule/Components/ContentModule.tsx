import React from "react";
import "./style/content_style.css";
import { servicesJWTdecodeAndValidity } from "../../utils";
import { useNavigate } from "react-router-dom";
import { LogOutModule } from "../../HeaderModule/LogOutModule";
import { TittleBarModule } from "../../HeaderModule/TittleBarModule";
import { CalendarModule } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ColorSwitcher } from "../../HeaderModule/ColorSwitcher";

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
            className=" w-full h-full bg-slate-300 flex flex-col justify-center items-center">
            <header className=" w-full h-1/6 bg-thems-background_header flex flex-col">
                <div className=" w-full h-1/2 flex flex-row">
                    <div className=" w-full  min-w-64 min-h-full flex items-center justify-center ">
                        <LogOutModule />
                    </div>
                    <div className=" w-2/4 min-w-64 min-h-full flex items-center justify-center ">
                        <TittleBarModule />
                    </div>
                    <div className="w-full min-w-64 min-h-full flex items-center justify-center">
                        <ColorSwitcher themedDivRef={themedDivRef} />
                    </div>
                </div>
                <div className="w-full h-1/2 bg-orange-100">
                    <h3>podnadpis</h3>
                </div>
            </header>
            <article className=" w-full h-auto p-5  bg-slate-500">
                <div>
                    <h1>article</h1>
                    <CalendarModule />
                </div>
            </article>
            <footer className=" w-full h-1/6 bg-green-600">
                <div>
                    <MessageList />
                </div>
            </footer>
        </div>

    )
}

export default ContentModule;