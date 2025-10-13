import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gamesService from "../../services/gamesService";
import { useNavigate } from "react-router-dom";
import "./styles/create-edit.css"



const GameEdit = () => {

        const {gameId} = useParams();
        const {gameData, setGameData} = useState(null)


        const [formData, setFormData] = useState({
            title: '',
            category: '',
            maxLevel: '',
            imageUrl: '',
            summary: ''
        });

        const navigate = useNavigate();


        useEffect(() => {
        gamesService.getOneGame(gameId).then((game) => {
        setFormData({
            title: game.title || '',
            category: game.category || '',
            maxLevel: game.maxLevel || '',
            imageUrl: game.imageUrl || '',
            summary: game.summary || ''
        });
        });
        }, [gameId]);

    // if (!gameData) return <p>Loading...</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gameId, formData)

        gamesService.editGame(gameId, formData)

        navigate('http://localhost:5173/gameplay')
        
    };

    const handleChange = (e) => {
         setFormData(state => ({...state, [e.target.name]: e.target.value}))
    };

    return  (
            <section id="edit-page" className="auth">
            <form id="edit" onSubmit={handleSubmit}>
                <div className="container">
                <h1>Edit Game</h1>

                <label htmlFor="title">Legendary title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <label htmlFor="maxLevel">Max Level:</label>
                <input
                    type="number"
                    id="maxLevel"
                    name="maxLevel"
                    min="1"
                    value={formData.maxLevel}
                    onChange={handleChange}
                />

                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                />

                <label htmlFor="summary">Summary:</label>
                <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                />

                <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
            </section>
        );

};


export default GameEdit;