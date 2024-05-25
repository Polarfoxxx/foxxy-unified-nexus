import React from "react";

function Clock(): JSX.Element {
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState("");

    React.useEffect(() => {
        setInterval(() => {
            const DATE = new Date();
            const YEARS = DATE.getFullYear().toString();
            const MONTH = (DATE.getMonth() + 1).toString();
            const DAY = DATE.getDate().toString();
            const HOURS = DATE.getHours().toString();
            const MIN = DATE.getMinutes().toString();
            const SEC = DATE.getSeconds().toString();

            const TIME_PROD = `${+HOURS < 10 ? 0 + HOURS : HOURS}:${+MIN < 10 ? 0 + MIN : MIN}:${+SEC < 10 ? 0 + SEC : SEC}`;
            const DATE_PROD = `${DAY}.${MONTH} ${YEARS} `;
            setTime(TIME_PROD);
            setDate(DATE_PROD);
        }, 1000);
    }, []);

    return (
        <div className="w-auto h-[80%] pl-2 pr-2 flex flex-row gap-5 bg-slate-100 items-center justify-center rounded-[8px] ">
            <div className=" w-auto h-full flex items-start justify-center">
                <h1 className="text-[20px] text-black relative left-3">
                    {time}
                </h1>
            </div>
            <div className=" w-auto h-full flex items-end justify-center">
                <h1 className="text-[13px] text-black relative right-5">
                    {date}
                </h1>
            </div>
        </div>

    );

};

export default Clock;