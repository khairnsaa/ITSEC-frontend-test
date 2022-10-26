import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {

    
    const navigate = useNavigate();
    const { user, setLoginStatus} = useContext(LoginContext)

    const [ inputLogin, setInputLogin ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputLogin({ ...inputLogin, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const checkuser = user.username === inputLogin.username && user.password === inputLogin.password
        console.log(checkuser)
        if(checkuser) {
            setLoginStatus(true);
            // console.log(checkuser)
            Cookies.set('username', user.username)
            Cookies.set('password', user.password)
            navigate('/')
        }
        
    }

    return (
        <section className="login">
            <form className="login-container" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                <button className="login-btn">Login</button>
            </form>
        </section>
    );
}
 
export default Login;