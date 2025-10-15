
import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    
    
    const [values, setValues] = useState(initialValues);


    const onChange = (e) => {
        setValues(state => (
            {...state, [e.target.name]:e.target.value}
        ))
        console.log(values)
    };

    const onSubmit = (e) => {
         e.preventDefault();
         submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    }


};



// import { useState } from "react"

// export default function useForm(submitHandler, initialValues) {
//     const [values, setValues] = useState(initialValues);

//     const onChange = (e) => {
//         setValues(state => ({
//             ...state,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         submitHandler(values);
//     };

//     return {
//         values,
//         onChange,
//         onSubmit,
//     }
// }