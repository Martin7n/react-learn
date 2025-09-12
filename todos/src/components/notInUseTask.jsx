import { useEffect, useState } from "react";


const Task = () => {
    const baseUrl = 'http://localhost:3030/jsonstore/todos'

    const [todos, setTodos] = useState([]);

    useEffect( () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {setTodos(Object.values(data))
       })
        .catch(e => console.log(e))
            }, [])

    // useEffect( () => {
    //     fetch(pplUrl)
    //     .then((resp) => resp.json())
    //     .then(data => 
    //         setHeroes(data)
    //        )
    //     .catch(err => console.log(err));
    // }, [])
    // useEffect( () => {
    //     fetch(baseUrl)
    //     .then(response => response.json())
    //     .then(data => setTodos(data))
    //     .catch(e => console.log(e))


    // })
    

    return (
            <ul>
            {todos.map(task =>

            <li key={task._id}>{task.text} {task.isCompleted ? 'compleded' : 'NotCompleted'} </li>)}
            </ul>

    )                               
};


export default Task;