import "../styles/login-register.css"

 const Login = () => {

    const onSubmit = (e) => {};


    return (
        <>
            <section id="login-page" className="auth">
                <form id="login" onSubmit={onSubmit}>

                    <div className="container">
                        <div className="brandLogo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password"/>
                        <input type="submit" className="btnSubmit" value="Login"/>
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