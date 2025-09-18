import { useEffect, useState } from "react";
import userService from "../services/userService";



const initialFormValues = {
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        createdAt: "",
        imageUrl: "",
}


const UserEditModal = (
) => {

    const idd = '7b3143e1-d6df-4e67-bd7e-5f8b03f2fd3f'

    const [formValues, setFormValues] = useState(initialFormValues);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
    userService.getOne(idd)
    .then(usr => setFormValues(usr))
    .catch( err => console.log(err))
    .finally(() => setIsLoading(false));}, []);

    const userChange = (e) => {
       const { name, value } = e.target;
        console.log("Changing", name, "to", value);

        setFormValues((state) => ({
            ...state,
            [name]: value
        }));
    };

    const blurHand = (e) => {
        console.log(e.target)
    };

    // console.log("Rendering form with value:", formValues.firstName);
       
      
//     return (
//         <input
//   type="text"
//   name="firstName"
//   value={formValues.firstName}
//   onChange={(e) => {
//     console.log("Typing:", e.target.value);
//     setFormValues((prev) => ({
//       ...prev,
//       firstName: e.target.value,
//     }));
//   }}
//   style={{ backgroundColor: "lightyellow" }}
// />
//     )

    

    return (
       
        <div className="singleUserEditForm"> 
         {isLoading ? (
      <p>Loading...</p>
        ) : (

         <div className="table-overlap">

"
            <form>
                <div>
                    <label htmlFor="firstName"> First name </label>
                    <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    value={formValues.firstName}
                    onChange={userChange} 
                    onBlur={blurHand}
                    />
                </div>
                <div>

                    <label htmlFor="lastName" onChange={userChange}> last name </label>
                    <input 
                        name="lastName" 
                        type="text" 
                        value={formValues.lastName}
                        onChange={userChange} 
                        onBlur={blurHand}
                        />
                </div>
            
            <label htmlFor="email"> Email </label>
                <input 
                    name="email" 
                    type="text" 
                    value={formValues.email}
                    onChange={userChange} 
                    onBlur={blurHand}
                        />
            <label htmlFor="phoneNumber"> Phone Number </label>
                <input 
                    name="phoneNumber" 
                    type="text" 
                    value={formValues.phoneNumber}
                    onChange={userChange} 
                    onBlur={blurHand}
                    />
            <label htmlFor="createdAt"> Created at </label>
                <input 
                    name="createdAt" 
                    type="text" 
                    value={formValues.createdAt}
                    onChange={userChange} 
                    onBlur={blurHand}
                    />
            <label htmlFor="imageUrl"> Image </label>

                <input 
                    type="text" 
                    value={formValues.imageUrl}
                    onChange={userChange} 
                    onBlur={blurHand}
                    />
            
            <button>Submit </button>
            </form>
            </div>)}
            


            <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
          </header>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label for="firstName">First name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="firstName" name="firstName" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label for="lastName">Last name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="lastName" name="lastName" type="text" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label for="email">Email</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <input id="email" name="email" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label for="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <input id="phoneNumber" name="phoneNumber" type="text" />
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label for="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span><i className="fa-solid fa-image"></i></span>
                <input id="imageUrl" name="imageUrl" type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label for="country">Country</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="country" name="country" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label for="city">City</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-city"></i></span>
                  <input id="city" name="city" type="text" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label for="street">Street</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="street" name="street" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label for="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-house-chimney"></i></span>
                  <input id="streetNumber" name="streetNumber" type="text" />
                </div>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">Save</button>
              <button id="action-cancel" className="btn" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> 

    



        </div>

    )

};



// const UserEditModal = () => {
//   const [formValues, setFormValues] = useState({
//     firstName: "John",
//   });

//   const userChange = (e) => {
//     const { name, value } = e.target;
//     console.log("change:", name, value);
//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <form>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           id="firstName"
//           name="firstName"
//           value={formValues.firstName}
//           onChange={userChange}
//         />
//       </form>
//     </div>
//   );
// };


export default UserEditModal;