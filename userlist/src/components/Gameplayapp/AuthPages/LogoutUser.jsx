
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/authContext";
import authService from "../../../services/authService";

export const LogoutUser = () => {

    const navigate = useNavigate();
    const {logoutSubmitHandler} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutSubmitHandler();
                navigate("/gameplay")
            })
            .catch( () => {
                logoutSubmitHandler();
                navigate("/gameplay")
            })
        }, []
    );

    return null;

};


export default LogoutUser;