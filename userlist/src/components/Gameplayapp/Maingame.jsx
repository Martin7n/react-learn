
import { useEffect, useState } from "react";
import GameslistItems from "./GameslistItems";
import Headergame from "./Headergame";
import styles from "./Maingame.module.css"
import gamesService from "../../services/gamesService";
import GamesDetails from "./GameDetails";

export const Maingame = () => {


    

    const [games, setGames] = useState([]);
    const [selectedGameId, setSelectedGameId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);

    // useEffect( () => 
    //        { setLoading(true);
    //         gamesService.getLatestGame()
    //         .then(games => setGames(games))
    //         .catch(e => console.log(e.message))
    //         .finally(setLoading(false))
    //     }, 
    //         []
    // );

    useEffect(() => {
            setLoading(true);

            setTimeout(() => {
                gamesService.getLatestGame()
                .then((games) => setGames(games))
                .catch((err) => console.error("Error fetching games:", err))
                .finally(() => setLoading(false));
            }, 2000);  
            }, []);

    const handleSelectGame = (id) => {
    setSelectedGameId(id);
    };



    return (
        
        <>
        
        <div id="box">

            <Headergame />

        <main id={styles.maincontent}>

        </main>

        <section id={styles.welcomeworld}>

            {loading && (
                    <div className={styles.noarticles} >Loading...</div>
            )}

            {!loading && games.length === 0 && (
            <p className={styles.noarticles}>No games yet</p>
             )}

           

            <div className={styles.welcomemessage}>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./public/images/four_slider_img01.png" alt="hero"></img>

             {selectedGameId && (
                 <GamesDetails
                    gameId={selectedGameId}
                    onClose={() => setSelectedGameId(null)}
                />
             )}

            <div id={styles.homepage}>
                <h1>Latest Games</h1>

           { games.map(game => <GameslistItems 
                    key={game._id} 
                    game={game}
                    onSelect={() => handleSelectGame(game._id)}     
           />)}
                
                
            </div>
        </section>





        </div>

        </>



    )







};
export default Maingame;