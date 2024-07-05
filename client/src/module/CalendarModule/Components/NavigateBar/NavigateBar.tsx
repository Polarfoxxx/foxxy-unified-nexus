import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { Type_for_NavigateBar, Type_for_ApplicationBar } from "./types";
import deletePatchForNaviBar_services from "./services/deletePatchForNaviBar_services";


function NavigateBar(): JSX.Element {
    const [allApplicationFordisplay, setAllApplicationFordisplay] = React.useState<Type_for_ApplicationBar[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const patch = location.pathname

    React.useEffect(() => {
        const filterApp = deletePatchForNaviBar_services(patch);
        setAllApplicationFordisplay(filterApp);
    }, [location]);

    const handleClick = (item: Type_for_ApplicationBar): void => {
        const setLocation = item.route;
        navigate(setLocation)
    };



    return (
        <div className=" w-full h-auto p-2 flex flex-col justify-center items-center gap-4">
            {
                allApplicationFordisplay.map((item, key) =>
                    <div
                        onClick={() => handleClick(item)}
                        className=" w-[40px] h-[40px] bg-black text-white rounded-[50%] flex items-center justify-center cursor-pointer"
                        key={key}>
                        <h1> {item.icon}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default NavigateBar;