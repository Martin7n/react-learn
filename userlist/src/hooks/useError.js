import { useCallback, useState } from "react";

export function useError(autoClearDelay = 0) {

    const [errorState, setErrorState] = useState(null) 

    const setError = useCallback( (msg) => {
        setErrorState(msg)

        if (autoClearDelay) {
            setTimeout(() => setErrorState(null), autoClearDelay)
        }
    
    }, [autoClearDelay]);

    const clearError = useCallback(() => setErrorState(null), [])

    return { errorState, setError, clearError };

};


export default useError;



