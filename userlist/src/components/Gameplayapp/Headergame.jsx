import { Link } from 'react-router-dom';
import styles from "./Headergame.module.css"
import "./styles/navigation.css"


export const Headergame = () => {




    return (
        <header>
                   
                    <h1><a className={styles.home} href="#">GamesPlay</a></h1>
                    <nav>
                        <a href="#">All games</a>
                       
                        <div id="user">
                            <a href="#">Create Game</a>
                            <a href="#">Logout</a>
                        </div>
                      
                        <div id="guest">
                            <Link to="/gameplay/login">Login</Link>
                            <Link to="/gameplay/register">Register</Link>
                        </div>
                    </nav>
                    </header>
    )
};
export default Headergame;