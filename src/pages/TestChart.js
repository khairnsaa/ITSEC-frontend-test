import { io } from "socket.io-client";
import { BarChart, Bar, Line, LineChart,XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";



const TestChart = () => {
    const [data, setData] = useState([]);
    
    const socket = io('http://localhost:3001', {
      transports: ['websocket', 'polling']
    });
    

    // 1. listen for a cpu event and update the state
    useEffect(() => {
        socket.on('cpu', cpuPercent => {
        setData(currentData => [...currentData, cpuPercent]);
        });
    }, []);
    return (
        <div className="test-chart">
            <h1>test chart</h1>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="value" />
            </LineChart>
        </div>
    );
}
 
export default TestChart;