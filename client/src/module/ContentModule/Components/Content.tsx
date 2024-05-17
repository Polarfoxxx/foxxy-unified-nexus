import React from "react";
import "./style/content_style.css";
import { Routes, useNavigate, NavLink, Route } from "react-router-dom";
import { LogOut, ColorSwitcher, TittleBar, Clock, Type_for_Content } from "../";
import { Calendar } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ParentAllMiniContent } from "../../Shared";
import { readData_API } from "../../apis/index.";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Type_forSetAllMessage, setAllMessages, setUserLogData } from "../../../redux";
import { readExistingExpCookie } from "../../apis/index.";
import { Type_for_data } from "../../AuthentificationModule";

function Content({ setAllMessages, setUserLogData }: Type_for_Content): JSX.Element {
    const navigate = useNavigate();
    const themedDivRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        existAndValidCookie()
        async function existAndValidCookie() {
            const cookieIsValid = await readExistingExpCookie();   //volanie pre zistenie a nasledne odoslanie cookie
            if (!cookieIsValid?.isValid) {
                navigate("/LoginPage")
            } else {
                setUserLogData({  //! Použití akce setUserLogData
                    userName: cookieIsValid.cookie_data.userName,
                    appTheme: cookieIsValid.cookie_data.appTheme
                });
            }
        };
    }, []);


    React.useEffect(() => {
        loadDataAPI();
        async function loadDataAPI() {
                try {
                    const load_data = await readData_API();
                    if (load_data) {
                        setAllMessages({
                            data: load_data.data.messages,
                            typeEvent: "setAll_message"
                        }) 
                    };
                } catch (error) {
                    console.log("Chyba pri načítavaní udalostí:", error);
                };
            };
    }, []);





    return (
        <div
            ref={themedDivRef}
            data-theme=""
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
/* set state for redux */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAllMessages: (props: Type_forSetAllMessage) => dispatch(
        setAllMessages({
            data: props.data,
            typeEvent: props.typeEvent
        })),
    setUserLogData: (data: Type_for_data) => dispatch(setUserLogData(data))
});

export default connect(null, mapDispatchToProps)(Content);






