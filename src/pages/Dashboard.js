import Sidebar from "../components/Sidebar";
import SideMenu from "../components/SideMenu";
import Card from '../components/Card'
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft,faBroadcastTower, faCloud,faCreditCard,faDroplet, faFile, faLowVision, faTemperature2,faWind } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";


const Dashboard = () => {
    const [coords, setCoords] = useState({
        lat: 0,
        lon: 0
    })
    const [ weather, setWeather] = useState({
        temp: 0,
        feelsLike: 0,
        wind: 0,
        humidity: 0,
        pressure: 0
    })
    const getCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        })
    }
    const getTemp = async (lat, lon) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b7859343dfd4328b7e4e43fbe4f2c882&units=metric`)
        const data = await res.data
        console.log(data.main.temp)
        setWeather({
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure
        })
    }

    useEffect(() => {
        getCoords()
        // getTemp(coords.lat, coords.lon)
    }, [])
    return (
        <section className="App">
            <Sidebar>
                <div className="black-box"></div>
                <SideMenu />
            </Sidebar>
            <section className="content">
                <Navbar />
                <div className="dashboard">
                    <div className="container weather">
                        <section className="title-date">
                            <h1>Weather</h1>
                            <p>{new Date().getDate()} . {new Date().getMonth()+1}</p>
                        </section>
                        <section className="temperature">
                            <FontAwesomeIcon icon={faCloud} />
                            <h2>{weather.temp} °C</h2>
                        </section>
                        <section className="temp-list">
                            <p>17°C</p>
                            <p>23°C</p>
                            <p>27°C</p>
                            <p>32°C</p>
                            <p>36°C</p>
                        </section>
                        <section className="details">
                            <p>details</p>
                            <div className="card-lists">
                                <Card title={"Humidity"} content={`${weather.humidity} °C`} icon={faDroplet}/>
                                <Card title={"Wind"} content={`${weather.wind} KM/H`} icon={faWind}/>
                                <Card title={"Feels like"} content={`${weather.feelsLike} °C`} icon={faTemperature2}/>
                                <Card title={"Visibility"} content={"N/A"} icon={faLowVision}/>
                                <Card title={"Pressure"} content={`${weather.pressure} In`} icon={faBroadcastTower}/>
                                <Card title={"Dew Point"} content={'11'} icon={faLowVision}/>
                            </div>
                        </section>
                    </div>
                    <div className="container earnings">
                        <h1>earnings</h1>
                        <Card />
                    </div>
                    <div className="container current-balance">
                        <section className="balance-header">
                            <div className="title">
                                <h1>Current Balance</h1>
                                <p>Today</p>
                            </div>
                            <button className="btn">
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                <span>Send Money</span>
                            </button>
                        </section>
                        <section className="balance-content">
                            <div className="total-balance"><h2>$2438,55</h2></div>
                            <div className="income-balance"><p>Income <span>+ $3657</span></p></div>
                            <div className="expense-balance"><p>Expense <span>- $3657</span></p></div>
                        </section>
                    </div>
                    <div className="container withdraw-funds">
                        <section className="funds-header">
                            <div className="title">
                                <h1>Withdraw Funds</h1>
                                <p>Today</p>
                            </div>
                            <button className="btn">
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                <span>Withdraw</span>
                            </button>
                        </section>
                        <section className="funds-content">
                            <div className="amount">
                                <p><FontAwesomeIcon icon={faCreditCard} /> Amount: </p>
                                <span>$2438,55</span>
                            </div>
                            <div className="confirmation">
                                <p><FontAwesomeIcon icon={faFile} /> Confirmation N.: </p>
                                <span>$2438,55</span>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    );
}
 
export default Dashboard;