import { useEffect, useState } from "react";
import gamesService from "../../services/gamesService";
import './styles/details.css'


const GamesDetails = ({gameId, showInfo}) => {

    const [gameDetails, setGameDetails] = useState({})

    console.log(`gameId in details => ${gameId}`)


    useEffect( () =>
        {gamesService.getOneGame(gameId).then(
          (obj) => setGameDetails(obj)
        )}, [gameId]

    );
    



    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">


                <div className="game-header">
                    <img className="game-img" src={gameDetails.imageUrl} />
                    <h1>Bright</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">{gameDetails.category} </p>
                </div>

                <p className="text">
                    {gameDetails.text}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            
            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment">
                </form>
            </article> */}

        </section>
    )

};
export default GamesDetails;