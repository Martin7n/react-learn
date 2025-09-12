import { useEffect, useState } from "react";
import styles from "./Todo.module.css"
import TaskItem from "./TaskItem";


const Todo = () => {

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

    <div className={styles.one}>
  <main className="main">

    <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
        </div>

    <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>

                  {todos.map(
                    todo =>
                    (
                      <TaskItem 
                      key={todo._id}
                      _id ={todo._id}
                      text ={todo.text}
                      isCompleted ={todo.isCompleted}
                      // changeStatusHandler={changeStatusHandler}
                      />



                    )
                  )}

         

              </tbody>
        </table>
      </div>
    </section>
  </main>
  </div>
  
)

};

export default Todo;