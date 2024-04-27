import React from "react";
import "./style/content_style.css";
import { servicesJWTdecodeAndValidity } from "../../utils";
import { Routes, useNavigate } from "react-router-dom";
import { LogOut, ColorSwitcher, TittleBar } from "../../HeaderModule";
import { Calendar } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { SubtText, Clock, CurrentAllEvent } from "../../SubtitleModule";
import { Container } from "../../ContainerModule";
import { readData_API } from "../../apis/index.";
import { NavLink, Route } from "react-router-dom";
import { ParentAllMiniContent } from "../../Shared";

function Content(): JSX.Element {
    const { appData, setAppData } = React.useContext(Container.Context)
    const NAVIGATE = useNavigate();
    const themedDivRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const JWT = localStorage.getItem("JWT");
        if (JWT !== null) {
            !servicesJWTdecodeAndValidity(JWT) && NAVIGATE("/LoginPage")
        } else {
            NAVIGATE("/LoginPage")
        };
    }, [NAVIGATE]);


    React.useEffect(() => {
        loadDataAPI()
    }, []);

    async function loadDataAPI() {
        const USER_NAME = localStorage.getItem("USER_NAME");
        if (USER_NAME !== null) {
            try {
                const LOAD_DATA = await readData_API(USER_NAME);
                if (LOAD_DATA) {
                    setAppData(prevAppData => ({
                        ...prevAppData,
                        userLogData: {
                            userName: USER_NAME,
                            appTheme: LOAD_DATA.data.theme
                        },
                        allEvents: LOAD_DATA.data.events,
                        allMessage: LOAD_DATA.data.messages
                    }));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        }
    };



    return (
        <div
            ref={themedDivRef}
            data-theme="light"
            className=" w-full h-screen flex flex-col justify-center items-center bg-thems-background_content bg-fullApp">
            <header className=" w-full h-[8%] flex items-center justify-center  p-2">
                <div className=" w-full h-full flex items-center justify-between bg-thems-background_content_header rounded-[15px] ">
                    <div className=" w-[100%] h-[100%] flex items-center justify-center">
                        <LogOut />
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center">
                        <TittleBar />
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center">
                        <Clock />
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center">
                        <ColorSwitcher
                            themedDivRef={themedDivRef} />
                    </div>
                </div>
            </header>
            <nav className="w-full h-screen flex items-start justify-start p-3">
                <div className="w-full flex items-start justify-start flex-wrap gap-3">
                    {/* calendar----------------------------------------------------------------- */}
                    <div className="w-[25%] h-[300px] rounded-[15px] bg-white border-2 border-white relative overflow-hidden shadow-miniApp">
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                            to="Calendar">
                        </NavLink>
                        <Calendar />
                    </div>
                    {/* messageList------------------------------------------------------------------ */}
                    <div className="w-[35%] h-[300px] rounded-[15px] bg-white border-2 border-white relative overflow-hidden shadow-miniApp">
                    
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                            to="MessageList">
                        </NavLink>
                        <MessageList />
                    </div>
                    <div className="w-[38%] h-[300px] flex flex-col justify-between items-center gap-3">
                        <div className="w-[100%] h-[145px] rounded-[15px] bg-white border border-black">

                        </div>
                        <div className="w-[100%] h-[145px] rounded-[15px] bg-white border border-black">

                        </div>
                    </div>
                    <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                    </div>
                    <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                    </div>
                    <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

                    </div>
                </div>
            </nav>
            <section className=" w-auto h-auto">
                <Routes>
                    <Route
                        path="Calendar"
                        element={
                            <ParentAllMiniContent>
                                <Calendar />
                            </ParentAllMiniContent>
                        } />
                    <Route
                        path="MessageList/*"
                        element={
                            <ParentAllMiniContent>
                                <MessageList />
                            </ParentAllMiniContent>
                        } />
                </Routes>
            </section>
            <footer className=" w-full h-[8%] flex items-center justify-center ">

            </footer>
        </div>
    )
};

export default Content;




/*    <header className=" w-full h-28  bg-transparent flex flex-col justify-center items-center ">
                <div className=" w-full h-full flex flex-row ">
                    <div className=" w-full min-w-64 h-full flex items-center justify-center ">
                        <LogOut />
                    </div>
                    <div className=" w-[30%] min-w-[300px] min-h-full flex items-center justify-center ">
                        <TittleBar />
                    </div>
                    <div className="w-[30%] min-w-64 min-h-full flex items-center justify-center">
                        <ColorSwitcher themedDivRef={themedDivRef} />
                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-row justify-between items-center pl-6 pr-6 ">
                    <div className=" w-[100%] min-w-[300px] h-full flex justify-center items-center pr-4 ">
                        <SubtText />
                    </div>
                    <div className=" w-[5%] min-w-[200px] rounded-l-3xl h-full flex justify-end items-center  border-b-2 border-purple-300 ">
                        <CurrentAllEvent />
                    </div>
                    <div className=" w-[15%] min-w-[200px] h-full flex justify-end items-center  border-b-2 border-purple-300">
                        <Clock />
                    </div>
                </div>
            </header>
            <article className=" w-full h-auto p-5 bg-transparent  flex justify-center items-center">
                <div className=" w-[90%] h-auto flex justify-center items-center">
                    <Calendar />
                </div>
            </article>
            <footer className=" w-full h-auto flex justify-center items-center p-5">
                <div className=" w-[90%] h-auto min-h-[600px] flex justify-center items-center">
                    <MessageList />
                </div>
            </footer> */