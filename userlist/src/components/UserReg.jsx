import { useEffect, useState } from "react";


const initialFormData =     {
    email: "",
    password: "",
    repassword: "",
    };

export default function UserReg(){

    const [formValues, setFormValues]  = useState(initialFormData);


    const saveUser = () => {};
    const userChange = (e) => {
       const { name, value } = e.target;
        
       setFormValues((state) => ({
            ...state,
            [name]: value
        })
    );}

    useEffect(
        ( ) => {

        }
    );


    const blurHand  = (e) => {
    
          console.log(formValues)
    }

    //!!Todo: simple validations
    //Todo: BE registration and tokens.


    return (
        <>

        <form onSubmit={saveUser}>
                            
                        {/* <div className="form-row"> */}
                            <div className="form-group long-line">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={formValues.email}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>

                            

                            <div className="form-group long-line">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <span>
                                <i className="fa-solid fa-map"></i>
                                </span>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                value={formValues.password}
                                onChange={userChange}
                                onBlur={blurHand}
                                />
                            </div>
                            </div>

                            <div className="form-group long-line">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <span>
                                <i className="fa-solid fa-map"></i>
                                </span>
                                <input
                                id="repassword"
                                name="repassword"
                                type="password"
                                value={formValues.repassword}
                                onChange={userChange}
                                onBlur={blurHand}
                                />
                            </div>
                            </div>




                            <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">
                                Save
                            </button>
                            <button id="action-cancel" className="btn" type="button">
                                Cancel
                            </button>
                            </div>
                        {/* </div> */}
                        </form>
                     </>
    )}

