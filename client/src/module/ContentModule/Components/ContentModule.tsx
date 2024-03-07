import React from "react";
import { HeaderModule } from "../../HeaderModule";
import { TittleBarModule } from "../../TittleBarModule";
import MyCalendar from "../../CalendarModule/Components/CalendarModule";
function ContentModule(): JSX.Element {


    return (
        <div className=" w-full h-full bg-slate-300 flex flex-col justify-center items-center">
            <header className=" w-full h-1/6 bg-slate-500 flex flex-col">
                <div className=" w-full h-1/2 flex flex-row">
                    <div className=" w-full h-full">
                        <HeaderModule />
                    </div>
                    <div className=" min-w-64 h-full flex">
                        <TittleBarModule />
                    </div>

                </div>
                <div className="w-full h-1/2 bg-orange-100">
                    <h3>podnadpis</h3>
                </div>
            </header>
            <article className=" w-full h-2/3  bg-amber-200">
                <div>
                    <h1>article</h1>
                    <MyCalendar/>
                </div>
            </article>
            <footer className=" w-full h-1/6 bg-green-600">
                <div>
                    <h1>footer</h1>
                </div>
            </footer>
        </div>

    )
}

export default ContentModule;