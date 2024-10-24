import React from "react";
import "./style/content_style.css";
import { Routes, useNavigate, NavLink, Route } from "react-router-dom";
import { LogOut, ColorSwitcher, TittleBar, Clock } from "../../HeaderModule";
import { Calendar } from "../../CalendarModule";
import { MessageList } from "../../MessageModule";
import { ParentAllMiniContent } from "../../Shared";
import { readData_API } from "../../APIs/index.";
import { useDispatch } from 'react-redux';
import { readExistingExpCookie } from "../../APIs/index.";
import { LittleCalendar, LittleMessage, LittleWeather } from "../../LittleAppComponents";
import { openWeatherAPI, dayAndHoliday } from "../../APIs/index.";
import { WeatherInfo } from "../../HeaderModule";
import { Weather } from "../../WeatherModule";
import {
    setAllMessages,
    setUserLogData,
    setWeatherData,
    setAllHoliday,
    setAllEvent
} from "../../../redux";


function Content(): JSX.Element {
    const navigate = useNavigate();
    const themedDivRef = React.useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    //! read cookie and set user data..........
    React.useEffect(() => {
        readCookie();
        async function readCookie() {
            const cookieIsValid = await readExistingExpCookie();   //volanie pre zistenie a nasledne odoslanie cookie
            if (cookieIsValid) {
                dispatch(setUserLogData({
                    userName: cookieIsValid.cookie_data.userName,
                    appTheme: cookieIsValid.cookie_data.appTheme
                }));
            }else {
                navigate("/LoginPage")
            };
        };
    }, []);

    React.useEffect(() => {
        //! load message event data.............................
        loadDataAPI();
        async function loadDataAPI() {
            try {
                const load_data = await readData_API();
                if (load_data) {
                    dispatch(setAllMessages({
                        data: load_data.data.messages,
                        typeEvent: "setAll_message"
                    }));
                    dispatch(setAllEvent(load_data.data.events));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };

        //! weather data..........................................
        loadWeathetAPI();
        async function loadWeathetAPI() {
            try {
                const load_data = await openWeatherAPI();
                if (load_data) {
                    dispatch(setWeatherData(load_data));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní udalostí:", error);
            };
        };

        //! dayHoliday...........................................
        loadDayHoliday();
        async function loadDayHoliday() {
            try {
                const data = await dayAndHoliday();
                if (data) {
                    dispatch(setAllHoliday(data));
                };
            } catch (error) {
                console.log("Chyba pri načítavaní holiday:", error);
            }
        };
    }, []);


    return (
        <div
            ref={themedDivRef}
            data-theme=""
            className=" w-full h-auto min-h-screen overflow-scrool flex flex-col justify-center items-center bg-thems-background_content bg-fullApp">
           <div className=" w-full h-auto min-h-screen">
           <header className=" w-full h-[50px] min-h-[70px] bg-slate-500 flex items-center justify-center p-2 ">
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
            <nav className="w-full h-[auto] flex items-start justify-start p-3  bg-orange-400">
                <div className="w-full flex items-start justify-center flex-wrap gap-3">
                    {/* calendar----------------------------------------------------------------- */}
                    <div className="w-[500px] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative overflow-hidden shadow-miniApp">
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]  hover:shadow-miniApp"
                            to="Calendar">
                        </NavLink>
                        <LittleCalendar />
                    </div>
                    {/* messageList------------------------------------------------------------------ */}
                    <div className="w-[500px] h-[300px] rounded-[15px] border border-thems-littleComponent_border relative  overflow-hidden">
                        <NavLink
                            className=" absolute w-full h-full bg-transparent cursor-pointer z-[60]"
                            to="MessageList">
                        </NavLink>
                        <LittleMessage />
                    </div>
                    {/* weather--------------------------------------------------------------------- */}
                    <div className="w-[500px] h-[300px] flex flex-col justify-between items-center gap-3">
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
                    <div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

</div>
<div className="w-[500px] h-[300px] rounded-[30px] bg-white border border-black">

</div>
                </div>
            </nav >
            <main className=" w-auto h-auto bg-red-600">
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
            </main>
            <footer className=" w-full h-[8%] flex items-center justify-center ">
                my footer
            </footer>
           </div>
           
        </div >
    )
};

export default Content;






