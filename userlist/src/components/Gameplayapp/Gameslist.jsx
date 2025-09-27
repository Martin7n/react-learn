import { useEffect, useState } from "react";
import styles from "./Maingame.module.css"
import gamesService from "../../services/gamesService";


export const Gameslist = (
    gm,
) => {

    return (
        <div className={styles.game}>
                        <div className={styles.imagewrap}>
                            <img src={gm.imageUrl}></img>
                        </div>
                        <h3>{gm.title}</h3>
                        <div className={styles.rating}>
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className={styles.databuttons}>
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>




    )

};

export default Gameslist;