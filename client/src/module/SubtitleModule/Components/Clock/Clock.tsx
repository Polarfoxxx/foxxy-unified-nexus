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
        <div className="w-auto pl-2 pr-2 font-anta flex flex-row gap-5">
            <div className=" ">
                {time}
            </div>
            <div>
                {date}
            </div>
        </div>

    );

};

export default Clock;