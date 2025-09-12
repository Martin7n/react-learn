import { useEffect, useState } from "react";


const TaskItem = ({
                _id,
                text,
                isCompleted,
                changeStatusHandler}
            ) => {

    const changeStatusClick = () => {
      changeStatusHandler(_id)
    };
   

    return (

            <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
              <td>{text}</td>
              <td>{isCompleted ? 'completed' : 'NotCompleted'} </td>
              <td class="todo-action">
                <button onClick={changeStatusClick} className="btn todo-btn">Change status</button>
              </td>
            </tr>

    )                               
};


export default TaskItem;