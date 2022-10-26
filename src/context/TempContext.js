import { createContext, useState } from "react";
import axios from "axios";

export const TempContext = createContext()

export const TempContextProvider = ({children}) => {
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

    return (
        <TempContext.Provider value={{coords, weather, getTemp, getCoords}}> 
            { children } 
        </TempContext.Provider>
    )
}