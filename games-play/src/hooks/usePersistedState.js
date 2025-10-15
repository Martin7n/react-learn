import { useState } from "react";


export default function usePersistedState(key, defaultVal){


    const [state, setState] = useState(
        () => {
            const persisTate = localStorage.getItem(key);

            if (persisTate) {
                return JSON.parse(persisTate)
            };
            return defaultVal
        }
    );

    const setPersisTate = (value) => {
        setState(value);


        let serializedValue;

        if (typeof value === 'function'){
            serializedValue = JSON.stringify(value(state))
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue)
    };

    return [state, setPersisTate]

};