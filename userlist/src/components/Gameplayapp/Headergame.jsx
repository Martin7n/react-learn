import styles from "./Headergame.module.css"


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
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </nav>
                    </header>
    )
};
export default Headergame;