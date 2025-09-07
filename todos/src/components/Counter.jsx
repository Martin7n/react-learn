import { useEffect, useRef, useState } from "react";


const Counter = () => {

    const [val, setVal] = useState(0);
    const intervalRef = useRef(null);

    const increaseVal = () => {

      setVal(oldState => oldState +1)

    };

    const decreaseVal  = () => {

      setVal(oldState => oldState -1)

    };

    const setNull =  () => {
      setVal(0)
    };



    const startCount = () => {

        if (intervalRef.current) return;
        intervalRef.current = setInterval( ()=> {
            setVal(oldState => oldState + 1)}, 1000
        );
        // setTimeout( () =>  setVal(oldState => oldState + 1), 1000)  

    };

    const stopCount = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    };

    //  useEffect(() => {
    //     setTimeout(() => setVal(s => s + 1), 1000);
    // }, [val]);



   


    return (
        <div>

            <h1>{val}</h1>

            <button onClick={increaseVal}>Increase</button>
            <button onClick={decreaseVal}>Decrease</button>
            <button onClick={setNull}>Set Null</button>
                        
            <button onClick={startCount}>startCount</button>
             <button onClick={stopCount}>stopCount</button>





        </div>
    )

    


};


export default Counter;