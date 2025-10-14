import { useState } from "react";
import gamesService from "../../services/gamesService";
import { useNavigate } from "react-router-dom";
import useError from "../../hooks/useError";
import formsValiadations from "./utils/formValidations";


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

    // const [errorMsg, setErrorMsg] = useState('')  

    const { errorState, setError, clearError } = useError(5000)
    const navigate = useNavigate()

    
    const onSubmit = async (e) => {
        e.preventDefault();
        clearError();
        //!! todo - validation, service(x), navigate(x), refactoring into hook and adding the new game into the client-side list
        console.log(formData)

        formsValiadations(formData)

        try {        
            const returnedData = await gamesService.createGame(formData)
            console.log(`returned ${returnedData}`)
            navigate('/gameplay')
        } catch (err) {  
            console.error("Submission failed:", err);
            setError("Something went wrong. Please try again.")
            // setErrorMsg(err.message || "Something went wrong. Please try again.");

        } 

        
    };
    const OnChange = (e) => {
        const {name, value} = e.target;

        setFormData(data => ({...data, [name]: value}))
        console.log("formData")

    };

    const blurCheckValues = (e) => {
        if (!e.target.value.trim()) {
            console.log(`${e.target.name} cannot be blank`)
        } else {
             console.log(`${e.target.name} cannot be ${e.target.value}`)
        }
    }
    




    return (

        <section id="create-page" className="auth">

            {errorState && 
                <div className="error">
                    <h2> {errorState}</h2>
                </div>}
            
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
                    onBlur={blurCheckValues}

                    />

                    <label htmlFor="category">Category:</label>
                    <input 
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter game category..."
                    value={formData.category}
                    onChange={OnChange}
                    onBlur={blurCheckValues}
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
                    onBlur={blurCheckValues}

                    />

                    <label htmlFor="game-img">Image:</label>
                    <input 
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Upload a photo..."
                    value={formData.imageUrl}
                    onChange={OnChange}
                    onBlur={blurCheckValues}

                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" 
                    id="summary"
                    value={formData.summary}
                    onChange={OnChange}
                    onBlur={blurCheckValues}

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