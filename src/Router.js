import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRouter from "./LoginRouter";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginRouter><Dashboard /></LoginRouter>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Router;