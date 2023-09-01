import React from 'react' 
import './WheatherApp.css'

import Search_icon from '../Assets/search.png';
import Clear_icon from '../Assets/clear.png';
import Cloud_icon from '../Assets/cloud.png';
import Drizzle_icon from '../Assets/drizzle.png';
import Rain_icon from '../Assets/rain.png';
import Snow_icon from '../Assets/snow.png';
import Wind_icon from '../Assets/wind.png';
import Humidity_icon from '../Assets/humidity.png';

const WheatherApp = () => {

    let api_key="d279ddf3f63579113839481582955031";
    
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();   
        const humidity = document.getElementsByClassName("Humidity-percent");
        const wind = document.getElementsByClassName("Wind-rate");
        const temperature = document.getElementsByClassName("Wheather-temp");
        const location = document.getElementsByClassName("Wheather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name;

    }
    return(
        <div className = 'container'>
            <div className = 'top-bar'>
                <input type = "text" className = "cityInput" placeHolder = 'Search' />
                <div className="Search_icon" onClick={()=>{search()}}>
                    <img src={Search_icon} alt=""/>
                </div>
            </div>
            <div className="Wheather-image">
                <img src={Cloud_icon} alt=""/>
            </div>
            <div className="Wheather-temp">24°c</div>
            <div className="Wheather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={Humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="Humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={Wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="Wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WheatherApp