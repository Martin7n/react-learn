import { useEffect, useState } from "react";
import styles from "./Maingame.module.css"
import gamesService from "../../services/gamesService";
import GamesDetails from "./GameDetails";


export const GameslistItems = ({ game, onSelect  })=> {


    return (

        <>

        <div className={styles.game}>
                        <div className={styles.imagewrap}>
                            <img src={game.imageUrl}></img>
                        </div>
                        <h3>{game.title}</h3>
                        <div className={styles.rating}>
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className={styles.databuttons}>
                     {/* <a  className="btn details-btn">Details</a> */}

                            <a onClick={onSelect } className="btn details-btn">Details</a>
                        </div>
                    </div>

                 </>   




    )

};

export default Gameslist;