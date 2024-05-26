import React from "react";
import { Type_RootState } from "../../../../../../redux";
import { Type_for_weatherInfo } from "./types";
import { connect } from "react-redux";

function WeatherInfo({ weatherData }: Type_for_weatherInfo): JSX.Element {

    console.log(weatherData);

    return (
        <div className=" w-full h-[80%] flex items-center justify-center text-thems-defaultTextColor">
            <div className=" w-[100%] h-[100%] flex items-center justify-center">
                <h1  className=" text-[18px]">
                    {weatherData.name}
                    </h1>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-end flex-row">
                <h1 className=" text-[22px] font-bold">
                    {weatherData.temp}
                    </h1>
                <span  className=" text-[22px]">
                    °C
                    </span>
            </div>
            <div className=" w-[100%] h-[100%] flex items-center justify-start">
                <img
                    className=" w-[100%] h-[auto]"
                    src={weatherData.icon} alt="weather icon" />
            </div>
        </div>
    );
};



const mapStateToProps = (state: Type_RootState) => ({
    weatherData: state.weatherData
});

export default connect(mapStateToProps)(WeatherInfo);
