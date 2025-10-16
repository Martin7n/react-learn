
import { useContext } from "react";
import AuthContext from "../Gameplayapp/Context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = (props) => {

   

    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to="gameplay/login"/>
    }

    return <Outlet />;


};
export default AuthGuard