import { useEffect, useState } from "react";


const TaskItem = ({
                _id,
                text,
                isCompleted}
            ) => {
    const baseUrl = 'http://localhost:3030/jsonstore/todos'

    const [todos, setTodos] = useState([]);

    useEffect( () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {setTodos(Object.values(data))
       })
        .catch(e => console.log(e))
            }, [])
    

    return (

            <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
              <td>{text}</td>
              <td>{isCompleted ? 'completed' : 'NotCompleted'} </td>
              <td class="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

    )                               
};


export default TaskItem;