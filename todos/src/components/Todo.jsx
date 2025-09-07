import Task from "./Task";
import styles from "./Todo.module.css"


const Todo = () => {



return (

    <div className={styles.one}>
<main className="main">

    <section className="todo-list-container">
      <h1>Todo List</h1>

      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">


        <div className="loading-container">
          <div className="loading-spinner">
            <span className="loading-spinner-text">Loading</span>
          </div>
        </div>


      


            
      </div>
    </section>
  </main>
  </div>)

};

export default Todo;