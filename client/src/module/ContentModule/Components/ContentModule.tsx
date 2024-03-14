import React from "react";
import "./style/content_style.css";
import { useNavigate } from "react-router-dom";
import { HeaderModule } from "../../HeaderModule";
import { TittleBarModule } from "../../TittleBarModule";
import { CalendarModule } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ColorSwitcher } from "../../ColorSwitcher";

function ContentModule(): JSX.Element {
    const NAVIGATE = useNavigate();
const themedDivRef = React.useRef<HTMLDivElement | null>(null);

React.useEffect(() => {
 const KEY = sessionStorage.getItem("key");
 KEY ?  NAVIGATE("/Content") : NAVIGATE("/LoginPage")
},[])

    return (
        <div 
        ref={themedDivRef} 
        data-theme="light"
        className=" w-full h-full bg-slate-300 flex flex-col justify-center items-center">
            <header className=" w-full h-1/6 bg-slate-500 flex flex-col">
                <div className=" w-full h-1/2 flex flex-row">
                    <div className=" w-full h-full">
                        <HeaderModule />
                    </div>
                    <div className=" min-w-64 h-full flex">
                        <TittleBarModule />
                    </div>
                    <div className=" min-w-64 h-full flex">
                        <ColorSwitcher themedDivRef= {themedDivRef}/> 
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