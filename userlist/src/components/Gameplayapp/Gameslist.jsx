import { useEffect, useState } from "react";
import styles from "./Maingame.module.css"
import gamesService from "../../services/gamesService";
import GamesDetails from "./GameDetails";


export const Gameslist = (
    gm,
    
) => {

    const [showDetails, setShowDetails] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);



    const gameDetailsHandler = (e) => {

        setSelectedGame(gm._id)

        gamesService.getOneGame(gm._id)
        
        console.log(gm._id)
        setShowDetails(true)
    }

    return (

        <>
                    {showDetails && selectedGame && <GamesDetails 
                            
                            userId={gm._id}
                          />}

        <div className={styles.game}>
                        <div className={styles.imagewrap}>
                            <img src={gm.imageUrl}></img>
                        </div>
                        <h3>{gm.title}</h3>
                        <div className={styles.rating}>
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className={styles.databuttons}>
                            <a onClick={gameDetailsHandler} className="btn details-btn">Details</a>
                        </div>
                    </div>

                 </>   




    )

};

export default Gameslist;