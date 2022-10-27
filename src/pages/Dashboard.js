import Sidebar from "../components/Sidebar";
import SideMenu from "../components/SideMenu";
import Card from '../components/Card'
import Navbar from "../components/Navbar";

import { useEffect, useContext, useState } from "react";
import { TempContext } from "../context/TempContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { io } from "socket.io-client";
import { Line, LineChart,XAxis, YAxis} from "recharts";
import { 
    faArrowRightArrowLeft,
    faBroadcastTower, 
    faCloud,
    faCreditCard,
    faDroplet, 
    faFile, 
    faLowVision, 
    faTemperature2,
    faWind, 
    faBell, faEnvelope, faTimes, faArrowsDownToLine, faSignOut } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Dashboard = () => {
    const {coords, weather, getTemp, getCoords} = useContext(TempContext)
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false)

    
    const navigate = useNavigate()
    
    const socket = io('http://localhost:3001', {
      transports: ['websocket', 'polling']
    });

    const openMenu = () => {
        document.querySelector('.sidebar').style.transform = 'translateX(0)'
    }
    const closeMenu = () => {
        document.querySelector('.sidebar').style.transform = 'translateX(-100%)'
    }

    const openDropdown = () => {
        if(open) setOpen(false)
        else setOpen(true)
    }

    const logoutUser = () => {
        Cookies.remove('username')
        Cookies.remove('password')
        
        navigate('/login')
    }

    useEffect(() => {
        getCoords()
        getTemp(coords.lat, coords.lon)
        socket.on('cpu', cpuPercent => {
            setData(currentData => [...currentData, cpuPercent]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className="App">
            <Sidebar>
                <div className="close-menu" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="black-box"></div>
                <SideMenu />
                <div className="profile-notif-message-small">
                    <div className="side-menu">
                        <FontAwesomeIcon icon={faBell} />
                        <span> Notification</span>
                    </div>
                    <div className="side-menu">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span> Messages</span>
                    </div>
                    <div className="message-container">
                        <div className="flags"></div>
                        <p>English</p>
                    </div>
                    <div className="profil-container" onClick={openDropdown}>
                        <div className="profil-picture"></div>
                        {
                            open &&
                            <div className="profil-popup" onClick={logoutUser}>
                                <FontAwesomeIcon icon={faSignOut} />
                                <span>Logout</span>
                            </div>
                        }
                    </div>
                </div>
            </Sidebar>
            <section className="content">
                <Navbar handleOpen={openMenu} openDropdown={openDropdown} open={open} logoutUser={logoutUser} />
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
                        <ProgressBar
                            completed={40}
                            className="wrapper"
                            barContainerClassName="container-bar"
                            completedClassName="barCompleted"
                            customLabel=" "
                        />
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
                        <h1>Earnings</h1>
                        <p>earnings</p>
                        <div className="earnings-content">
                            <LineChart width={500} height={300} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Line dataKey="value" />
                            </LineChart>
                            <div className="earnings-text">
                                <h1 className="total-earning">$123.34</h1>
                                <p className="profit-loss"><span className="status">+42%</span> since last week</p>
                                <div className="crypto">11800 <span className="crypto-name">ETH</span></div>
                                <div className="crypto">11800 <span className="crypto-name">SNT</span></div>
                            </div>

                        </div>
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
                                <FontAwesomeIcon icon={faArrowsDownToLine} />
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