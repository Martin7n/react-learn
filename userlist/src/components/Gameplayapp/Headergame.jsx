import { Link } from 'react-router-dom';
import styles from "./Headergame.module.css"
import "./styles/navigation.css"
import { useContext } from 'react';
import AuthContext from './Context/authContext';


export const Headergame = (
) => {

    const { isAuthenticated, email } = useContext(AuthContext)


    return (
        <header>

           
                   
                    <h1><a className={styles.home} href="#">GamesPlay</a></h1>
                    <nav>
                        <a href="#">All games</a>

                        {isAuthenticated &&
                       
                        <div id="user">
                            <p> Hello, {email}</p>
                            <a href="/gameplay/create">Create Game</a>
                            <a href="#">Logout</a>
                        </div>}

                        {!isAuthenticated &&
                        
                        <div id="guest">
                           
                            <Link to="/gameplay/login">Login</Link>
                            <Link to="/gameplay/register">Register</Link>
                        </div>}
                    </nav>
                    </header>
    )
};
export default Headergame;