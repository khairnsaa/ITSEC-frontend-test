import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRouter from "./LoginRouter";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TestChart from "./pages/TestChart";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginRouter><Dashboard /></LoginRouter>} />
                <Route path="/login" element={<Login />} />
                <Route path="/test-chart" element={<TestChart />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Router;