import { useContext } from "react";
import "../styles/login-register.css"
import useForm from "../../../hooks/useForm";
import AuthContext from "../Context/authContext";


const LoginFormKyes =     {
    Email: "email",
    Password: "password",
    };


 const Login = () => {
    // const [formValues, setFormValues]  = useState(initialFormData);
    const {loginSubmitHandler} = useContext(AuthContext)

    const { values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '', 
        [LoginFormKyes.Password]: ''}
    );


    // blurLog..just in case
    const blurHand = (e) => { 
        console.log(LoginFormKyes)
    };
    

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
                            name={LoginFormKyes.Email}
                            placeholder="Sokka@gmail.com"
                            value={values[LoginFormKyes.Email]}
                            onChange={onChange}
                            onBlur={blurHand}
                            />

                        <label htmlFor="login-pass">Password:</label>
                        <input 
                            type="password" 
                            id="login-password" 
                            name={LoginFormKyes.Password}
                            value={values[LoginFormKyes.Password]}
                            onChange={onChange}
                            onBlur={blurHand}
                            />
                          
                        <input 
                            type="submit" 
                            className="btn submit" 
                            value="Login"/>
                           
                        <p className="field">
                            <span>If you don't have profile click <a href="/gameplay/register">here</a></span>
                        </p>
                    </div>
                </form>
        </section>
  </>
    )

};

export default Login;