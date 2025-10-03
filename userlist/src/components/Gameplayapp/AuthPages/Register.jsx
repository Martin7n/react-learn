import { useContext, useState } from "react";
import "../styles/login-register.css"
import useForm from "../../../hooks/useForm";
import AuthContext from "../Context/authContext";


const RegFormKyes =     {
    Email: "email",
    Password: "password",
    ConfirmPassword: 'repass'
    };


const Register = () => {

    const {regSubmitHandler} = useContext(AuthContext)
    
    const { values, onChange, onSubmit} = useForm(regSubmitHandler, {
            [RegFormKyes.Email]: '', 
            [RegFormKyes.Password]: ''}
        );


    // blurLog..just in case
    const blurHand = (e) => { 
        console.log(RegFormKyes)
    };



    return (
        <section id="register-page" className="contentAuth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brandLogo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name={RegFormKyes.Email}
                        placeholder="Sokka@gmail.com"
                        value={values[RegFormKyes.Email]}
                        onChange={onChange}
                        onBlur={blurHand}
                        />

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name={RegFormKyes.Password}
                        placeholder="Sokka@gmail.com"
                        value={values[RegFormKyes.Password]}
                        onChange={onChange}
                        onBlur={blurHand}
                        />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirm-password"
                        value={values[RegFormKyes.ConfirmPassword]}
                        onChange={onChange}
                        onBlur={blurHand}
                        />

                    <input className="btn submit" type="submit" value="Register" onSubmit={onSubmit}/>

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    )
}; 
export default Register;