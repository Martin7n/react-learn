
import styles from "./Maingame.module.css"

export const Maingame = () => {


    return (
        <>
        <div id="box">

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

        <main id={styles.maincontent}>

        </main>

        <section id={styles.welcomeworld}>

            <div className={styles.welcomemessage}>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"></img>

            <div id={styles.homepage}>
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                <div className={styles.game}>
                    <div className={styles.imagewrap}>
                        <img src="./images/CoverFire.png"></img>
                    </div>
                    <h3>Cover Fire</h3>
                    <div className={styles.rating}>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className={styles.game}>
                    <div className={styles.imagewrap}>
                        <img src="./images/ZombieLang.png"></img>
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className={styles.rating}>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className={styles.game}>
                    <div className={styles.imagewrap}>
                        <img src="./images/MineCraft.png"></img>
                    </div>
                    <h3>MineCraft</h3>
                    <div className={styles.rating}>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>

                {/* <!-- Display paragraph: If there is no games  --> */}
                <p className="no-articles">No games yet</p>
            </div>
        </section>





        </div>

        </>



    )







};
export default Maingame;