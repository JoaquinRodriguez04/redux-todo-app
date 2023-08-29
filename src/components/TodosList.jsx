import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";

const TodosList = () => {
    
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
      <section className='todos-list-wrapper'>
        <h2 className="todo-list-title">your list todo</h2>
        <ul className="todos-list">
            {todos.map((todo, index) => (
                <li 
                className="todos-item"
                key={todo.id}>
                    <div className="todo-item-top">
                        <div className="todo-item-name">
                            <div className="todo-item-circle"></div>
                            <p>{todo.title}</p>
                        </div>
                        <button 
                        className="todo-item-btn-close"
                        onClick={() => handleDeleteTodo(todo.id)}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="todo-item-bottom">
                        <p className="todo-item-bottom-descripcion">{todo.description}</p>
                    </div>
                </li>
            ))}
        </ul>
      </section>
    )
};

export default TodosList;
