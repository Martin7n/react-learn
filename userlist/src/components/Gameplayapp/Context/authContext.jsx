import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/authService";
import usePersistedState from "../../../hooks/usePersistedState";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    //the logic from App.jsx is transfered into wrapper-context element
    const navigate = useNavigate();
    
    // const [auth, setAuth] = useState(() =>{
    //      return {};
    //     }
    //   );
    const [auth, setAuth] = usePersistedState('auth', {});


    //handler 1
    const loginSubmitHandler = async (values) => {
        //! error handling and validation!

        console.log('loginSubmitHandler')
        console.log(values)
        
        const result = await authService.login(
          values
        )
        const data = await result.json();
        
        setAuth(data)

         
        navigate("gameplay/") 
        
        // console.log(await result.json())
  };


    const regSubmitHandler = async (values) => {
        console.log('regSubmitHandler')
        console.log(values)
        //! error handling and validation!
        const result = await authService.register(values)
        const data = await result.json()

        //! server login
        setAuth(data);
        console.log(result)



  };

  
    const values = {
        loginSubmitHandler,
        regSubmitHandler,
        email: auth.email,
        password: auth.password,
        isAuthenticated: !!auth.email,    
      }

      return (

        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
      )

};

export default AuthContext;
