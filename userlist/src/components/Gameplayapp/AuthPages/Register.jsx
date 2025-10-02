import { useEffect, useState } from "react";



const initialFormData =     {
    email: "",
    password: "",
    confirmPassword: "",
    
    };


const Register = () => {

    const [formValues, setFormValues] = useState(initialFormData);


    const onSubmit = (e) => {
    };

    const userChange = (e) => {
        const {name, value} = e.target;
        console.log(e.target)

        
        setFormValues(formVals => 
            ({...formVals, [name]:value})
        );
        console.log(formValues)
        
    };
    
    const blurHand = (e) => {};



    return (
        <section id="register-page" className="contentAuth">
            <form id="register">
                <div className="container">
                    <div className="brandLogo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={userChange}
                        onBlur={blurHand}
                        />

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="register-password"
                        value={formValues.password}
                        onChange={userChange}
                        onBlur={blurHand}
                        />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirm-password"
                        value={formValues.confirmPassword}
                        onChange={userChange}
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