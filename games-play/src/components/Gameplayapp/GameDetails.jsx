import { useContext, useEffect, useState } from "react";
import gamesService from "../../services/gamesService";
import './styles/details.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Comments from "./Comments";
import commentsService from "../../services/commentsService";
import AuthContext from "./Context/authContext";


const GamesDetails = ({gameId, onClose}) => {

    const [gameDetails, setGameDetails] = useState({})
    const navigate = useNavigate();
    const [comments, setComments] = useState([])
    const [newComments, setNewComments] = useState("")
    const {email, userId} = useContext(AuthContext)

    console.log(`gameId in details => ${gameId}`)


    useEffect( () =>
        
        {gamesService.getOneGame(gameId).then(
          (obj) => setGameDetails(obj)
        )}, [gameId]

 

    );

    useEffect( () => 
        {commentsService.getComments(gameId)
            .then( (data) => {
                console.log(data);
                setComments(data);
            })

        }, [gameId]

    );


    const commentsInput = (e) => {
        setNewComments(e.target.value)
        // console.log(newComments)
    };
    const commentSubmitHandler = (e) => {
        e.preventDefault();

        console.log(`data ===> {newComments}`)
        commentsService.addComment(gameId, newComments, userId)
    };




    const delGameHandler = async () => {

        const confirmed = confirm("Are you sure you want to delete the game?")

        if (confirmed) {
            await gamesService.delGame(gameId)

            navigate("/gameplay")
        }



    }


    return (
        <section id="game-details">

            
            <h1>Game Details</h1>
            
            
            <div className="info-section">


                <div className="game-header">

                                     <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                              className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                              <path fill="currentColor"
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                              </path>
                            </svg>
                          </button>
                    <img className="game-img" src={gameDetails.imageUrl} />
                    <h1>{gameDetails.title}</h1>
                    <span className="levels">MaxLevel:{gameDetails.maxLevel}</span>
                    <p className="type">{gameDetails.category} </p>
                </div>
  
                <p className="text">
                    {gameDetails.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}

               
                <div className="details-comments">
                   
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}

                         { comments && 
                            comments.map((comment) => 
                            <Comments key={comment.id} comment={comment}/>)

                        }
                        
                        {/* <li className="comment">
                            <p>Content: hardCoded.</p>
                        </li> */}
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    
                </div>

                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={commentSubmitHandler}>
                            <textarea name="comment" placeholder="Comment......" onChange={commentsInput}></textarea>
                            <input className="btn submit" name="comment" type="submit"  value="Add Comment"/>
                        </form>
                    </article>

                <div className="buttons">
                    
                    <Link to={`/gameplay/edit/${gameId}`} className="button">Edit</Link>
                    <a href="#" className="button" onClick={delGameHandler}>Delete</a>

   
                </div>
            </div>

            

        </section>
    )

};
export default GamesDetails;