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
import { readExistingExpCookie } from "../../apis/index.";
import { Type_for_data } from "../../AuthentificationModule";
import { LittleCalendar, LittleMessage, LittleWeather } from "../../LittleAppComponents";
import { openWeatherAPI, dayAndHoliday } from "../../apis/index.";
import { Type_for_WeatherData, WeatherInfo } from "../";
import { Weather } from "../../WeatherModule";
import { Type_for_dayAndHoliday } from "../../CalendarModule";
import { Type_for_newEventFrom_DB } from "../../CalendarModule";
import {
    Type_forSetAllMessage,
    setAllMessages,
    setUserLogData,
    setWeatherData,
    setAllHoliday,
    setAllEvent
} from "../../../redux";


function Content({
    setAllMessages,
    setUserLogData,
    setWeatherData,
    setAllHoliday,
    setAllEvent
}: Type_for_Content): JSX.Element {
    const navigate = useNavigate();
    const themedDivRef = React.useRef<HTMLDivElement | null>(null);

    //! existin and validate cookie and set user data
    React.useEffect(() => {
       /*  existAndValidCookie(); */
        async function existAndValidCookie() {
            const cookieIsValid = await readExistingExpCookie();   //volanie pre zistenie a nasledne odoslanie cookie
            if (!cookieIsValid?.isValid) {
                navigate("/LoginPage");
            } else {
                setUserLogData({
                    userName: cookieIsValid.cookie_data.userName,
                    appTheme: cookieIsValid.cookie_data.appTheme
                });
            }
        };
    }, []);

    React.useEffect(() => {
        //! load message event data
        loadDataAPI();
        async function loadDataAPI() {
            try {
                const load_data = await readData_API();
                if (load_data) {
                    setAllMessages({
                        data: load_data.data.messages,
                        typeEvent: "setAll_message"
                    });
                    setAllEvent(load_data.data.events);
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };

        //! weather data
        loadWeathetAPI();
        async function loadWeathetAPI() {
            try {
                const load_data = await openWeatherAPI();
                if (load_data) {
                    setWeatherData(load_data)
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };

        //! dayHoliday
        loadDayHoliday();
        async function loadDayHoliday() {
            try {
                const data = await dayAndHoliday();
                if (data) {
                    setAllHoliday(data);
                };
            } catch (error) {
                console.log("Chyba pri načítavaní holiday:", error);
            }
        };
    }, []);


    return (
        <div
            ref={themedDivRef}
            data-theme="light"
            className=" w-full h-screen flex flex-col justify-center items-center bg-thems-background_content bg-fullApp">
            <header className=" w-full h-[8%] max-h-[76px] flex items-center justify-center p-2 ">
                <div className=" w-full h-full flex items-center justify-between bg-thems-littleComponent_Background  shadow-miniApp border border-thems-littleComponent_border rounded-[5px] ">
                    <div className=" w-[10%] h-[100%] flex items-center justify-center">
                        <LogOut />
                    </div>
                    <div className=" w-[100%] h-[100%] flex items-center justify-center">
                        <TittleBar />
                    </div>
                    <div className=" w-[15%] min-w-[210px] h-[100%] flex items-center justify-center ">
                        <WeatherInfo />
                    </div>
                    <div className=" w-[10%] min-w-[100px] h-[100%] flex items-center justify-center ">
                        <Clock />
                    </div>
                    <div className=" w-[16%] min-w-[210px] h-[100%] flex items-center justify-center ">
                        <ColorSwitcher
                            themedDivRef={themedDivRef} />
                    </div>
                </div>
            </header>
            <nav className="w-full h-screen flex items-start justify-start p-3">
                <div className="w-full flex items-start justify-start flex-wrap gap-3">
                    {/* calendar----------------------------------------------------------------- */}
                    <div className="w-[25%] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative overflow-hidden shadow-miniApp">
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                            to="Calendar">
                        </NavLink>
                        <LittleCalendar />
                    </div>
                    {/* messageList------------------------------------------------------------------ */}
                    <div className="w-[35%] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative  overflow-hidden">
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                            to="MessageList">
                        </NavLink>
                        <LittleMessage />
                    </div>
                    {/* weather--------------------------------------------------------------------- */}
                    <div className="w-[38%] h-[300px] flex flex-col justify-between items-center gap-3">
                        <div className="w-[100%] h-[145px] rounded-[15px] border border-thems-littleComponent_border relative overflow-hidden shadow-miniApp">
                            <NavLink
                                className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                                to="Weather">
                            </NavLink>
                            <LittleWeather />
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
            </nav >
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
                    <Route
                        path="Weather"
                        element={
                            <ParentAllMiniContent>
                                <Weather />
                            </ParentAllMiniContent>
                        } />
                </Routes>
            </section>
            <footer className=" w-full h-[8%] flex items-center justify-center ">

            </footer>
        </div >
    )
};
//! set state for redux
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAllMessages: (props: Type_forSetAllMessage) => dispatch(
        setAllMessages({
            data: props.data,
            typeEvent: props.typeEvent
        })),
    setUserLogData: (data: Type_for_data) => dispatch(setUserLogData(data)),
    setWeatherData: (data: Type_for_WeatherData) => dispatch(setWeatherData(data)),
    setAllHoliday: (data: Type_for_dayAndHoliday[]) => dispatch(setAllHoliday(data)),
    setAllEvent: (data: Type_for_newEventFrom_DB[]) => dispatch(setAllEvent(data)),
});

export default connect(null, mapDispatchToProps)(Content);






