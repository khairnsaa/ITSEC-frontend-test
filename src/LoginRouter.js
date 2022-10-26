import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const LoginRouter = ({children}) => {
    if(Cookies.get('username') === undefined){
        return <Navigate to='/login' replace />
    }

    return children
}
 
export default LoginRouter;