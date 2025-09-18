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
        address: {
            country: "",
            city: "",
            street: "",
            streetNumber: "",

        }
}


const UserEditModal = (
     {userId,
    onClose}
) => {

    const idd = '7b3143e1-d6df-4e67-bd7e-5f8b03f2fd3f'

    const [formValues, setFormValues] = useState(initialFormValues);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
    userService.getOne(userId)
    .then(usr => setFormValues(usr))
    .catch( err => console.log(err))
    .finally(() => setIsLoading(false));}, []);

    const userChange = (e) => {
       const { name, value } = e.target;
        console.log("Changing", name, "to", value);

        if (["city", "street", "country", "streetNumber"].includes(name)){
             setFormValues((state) => ({
            ...state,
           address: {
            ...state.address,
            [name]: value
           }
        }));
            
        } else

       { setFormValues((state) => ({
            ...state,
            [name]: value
        }));}
    };

    const blurHand = (e) => {
        console.log(e.target)
    };

    

    return (
            <div className="singleUserEditForm">
                {isLoading ? (
                <p>Loading...</p>
                ) : (
                <div className="table-overlap">
                    <div className="overlay">
                    <div className="backdrop"></div>
                    <div className="modal">
                        <div className="user-container">
                        <header className="headers">
                            <h2>Edit User/Add User</h2>
                            <button className="btn close" onClick={onClose}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="xmark"
                                className="svg-inline--fa fa-xmark"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                fill="currentColor"
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3 54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25L114.8 256 9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.2 256l105.4 105.4z"
                                />
                            </svg>
                            </button>
                        </header>

                        <form>
                            <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-user"></i>
                                </span>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formValues.firstName}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-user"></i>
                                </span>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formValues.lastName}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>
                            </div>

                            <div className="form-row">
                            <div className="form-group">
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

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={formValues.phoneNumber}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>
                            </div>

                            <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span>
                                <i className="fa-solid fa-image"></i>
                                </span>
                                <input
                                id="imageUrl"
                                name="imageUrl"
                                type="text"
                                value={formValues.imageUrl}
                                onChange={userChange}
                                onBlur={blurHand}
                                />
                            </div>
                            </div>

                            <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-map"></i>
                                </span>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    value={formValues.address?.country || ""}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-city"></i>
                                </span>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={formValues.address?.city || ""}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>
                            </div>

                            <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-map"></i>
                                </span>
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    value={formValues.address?.street || ""}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-house-chimney"></i>
                                </span>
                                <input
                                    id="streetNumber"
                                    name="streetNumber"
                                    type="text"
                                    value={formValues.address?.streetNumber || ""}
                                    onChange={userChange}
                                    onBlur={blurHand}
                                />
                                </div>
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
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
            );


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