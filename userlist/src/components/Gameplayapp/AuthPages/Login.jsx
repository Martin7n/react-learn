import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../styles/login-register.css"


const initialFormData =     {
    email: "",
    password: "",
    };


 const Login = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues]  = useState(initialFormData);
    
    const userChange = (e) => {
        const {name, value} = e.target;
       
        setFormValues(state => ({...state, [name]:value}))
        
        console.log(value)
    };

    // blurLog..just in case
    const blurHand = (e) => { 
        console.log(formValues)
    };
    
    
    const onSubmit = (e) => {};


    return (
        <>
            <section id="login-page" className="contentAuth">
                <form id="login" onSubmit={onSubmit}>

                    <div className="container">
                        <div className="brandLogo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Sokka@gmail.com"
                            value={formValues.email}
                            onChange={userChange}
                            onBlur={blurHand}
                            />

                        <label htmlFor="login-pass">Password:</label>
                        <input 
                            type="password" 
                            id="login-password" 
                            name="password"
                            value={formValues.password}
                            onChange={userChange}
                            onBlur={blurHand}
                            />
                          
                        <input 
                            type="submit" 
                            className="btn submit" 
                            value="Login"/>
                           
                        <p className="field">
                            <span>If you don't have profile click <a href="#">here</a></span>
                        </p>
                    </div>
                </form>
        </section>
  </>
    )

};

export default Login;