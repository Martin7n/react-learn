
import { useEffect, useState } from "react";
import Gameslist from "./Gameslist";
import Headergame from "./Headergame";
import styles from "./Maingame.module.css"
import gamesService from "../../services/gamesService";

export const Maingame = () => {


    

    const [games, setGames] = useState([])
    
    useEffect( () => 
           { gamesService.getLatestGame()
            .then(games => setGames(games))}, []
    
        );


    return (
        
        <>
        
        <div id="box">

            <Headergame />

        <main id={styles.maincontent}>

        </main>

        <section id={styles.welcomeworld}>

            <div className={styles.welcomemessage}>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./public/images/four_slider_img01.png" alt="hero"></img>

            <div id={styles.homepage}>
                <h1>Latest Games</h1>

           { games.map(gm => <Gameslist key={gm._id} {...gm}/>)}
                

                {/* <!-- Display div: with information about every game (if any) --> */}
                {/* <div className={styles.game}>
                    <div className={styles.imagewrap}>
                        <img src="./images/CoverFire.png"></img>
                    </div>
                    <h3>Cover Fire</h3>
                    <div className={styles.rating}>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className={styles.databuttons}>
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div> */}
                {/* <div className={styles.game}>
                    <div className={styles.imagewrap}>
                        <img src="./images/ZombieLang.png"></img>
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className={styles.rating}>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className={styles.databuttons}>
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
                    <div className={styles.databuttons}>
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div> */}

                {/* <!-- Display paragraph: If there is no games  --> */}
                <p className={styles.noarticles}>No games yet</p>
            </div>
        </section>





        </div>

        </>



    )







};
export default Maingame;