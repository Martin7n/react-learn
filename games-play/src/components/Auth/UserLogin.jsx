// import { useEffect, useState } from "react";
// import { redirect, useNavigate } from "react-router-dom";


// const initialFormData =     {
//     email: "",
//     password: "",
//     };

// export const UserLogin = () => {
//     const navigate = useNavigate();



//     const [formValues, setFormValues]  = useState(initialFormData);
    
    
    
    
//     const userChange = (e) => {

//         const {name, value} = e.target;

//         setFormValues(curStateFormValue => 
//         ({...curStateFormValue, [name]:value})
//         )

//         console.log(formValues)

//     };

//     const blurHand = (e) => {
//         console.log(formValues)
//     };

//     const loginUserHandler = (e) => {
//         e.preventDefault()
//         //!! pass to service, then redirect++ OR return error msg.
//         navigate("/")
//     };



//     return (<>

//         <form onSubmit={loginUserHandler}>
                            
//                         {/* <div className="form-row"> */}
//                             <div className="form-group long-line">
//                                 <label htmlFor="email">Email</label>
//                                 <div className="input-wrapper">
//                                 <span>
//                                     <i className="fa-solid fa-envelope"></i>
//                                 </span>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="text"
//                                     value={formValues.email}
//                                     onChange={userChange}
//                                     onBlur={blurHand}
//                                 />
//                                 </div>
//                             </div>

                            

//                             <div className="form-group long-line">
//                             <label htmlFor="password">Password</label>
//                             <div className="input-wrapper">
//                                 <span>
//                                 <i className="fa-solid fa-map"></i>
//                                 </span>
//                                 <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 value={formValues.password}
//                                 onChange={userChange}
//                                 onBlur={blurHand}
//                                 />
//                             </div>
//                             </div>

//                             <div id="form-actions">
//                             <button id="action-save" className="btn" type="submit">
//                                 Save
//                             </button>
//                             <button id="action-cancel" className="btn" type="button">
//                                 Cancel
//                             </button>
//                             </div>
//                         {/* </div> */}
//                         </form>
//                      </>
//     )
// };


// export default UserLogin;