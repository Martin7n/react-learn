import { useState } from "react";
import gamesService from "../../services/gamesService";
import { useNavigate } from "react-router-dom";


const initialValues = {
            title: '',
            category: '',
            maxLevel: '',
            imageUrl: '',
            summary: '',
}

const GameCreate = () => {
    
    const [formData, setFormData] = useState(
        initialValues
        );
    const navigate = useNavigate()

    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting')
        //!! todo - validation, service(x), navigate(x), refactoring into hook and adding the new game into the client-side list
        console.log(formData)
        await gamesService.createGame(formData)

        navigate('/gameplay')
        
    };
    const OnChange = (e) => {
        const {name, value} = e.target;

        setFormData(data => ({...data, [name]: value}))
        console.log(formData)

    };
    




    return (

        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input 
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter game title..."
                    value={formData.title}
                    onChange={OnChange}
                    />

                    <label htmlFor="category">Category:</label>
                    <input 
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter game category..."
                    value={formData.category}
                    onChange={OnChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input 
                    type="number"
                    id="maxLevel"
                    name="maxLevel"
                    min="1" 
                    placeholder="1"
                    value={formData.maxLevel}
                    onChange={OnChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input 
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Upload a photo..."
                    value={formData.imageUrl}
                    onChange={OnChange}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" 
                    id="summary"
                    value={formData.summary}
                    onChange={OnChange}
                    > </textarea>
                    <input className="btn submit" 
                    type="submit"
                    value="Create Game
                    "/>
                </div>
                            </form>
        </section>
        
    )


};

export default GameCreate;