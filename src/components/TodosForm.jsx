import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import { activeForm } from '../features/isForm/isFormSlice';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';

const TodosForm = () => {
    // useSelectors
    const isActive = useSelector(state => state.isForm.isActive);
    const todosSlice = useSelector(state => state.todos);

    // dispatch
    const dispatch = useDispatch();
    
    // useForm
    const {register, handleSubmit, reset} = useForm();

    // function send ===> handleSubmit
    const send = (data) => {
        dispatch(addTodo({...todos,
            'title': data.name,
            'description': data.description,
            'id': uuid(),
        }));
        reset();
    };

    // handleActivatedForm
    const handleActivatedForm = () => {
        dispatch(activeForm());
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todosSlice));
    }, [todosSlice]);
    
    return (
        <div className="todos-form-wrapper">
            <div 
            className='todo-form-top' 
            onClick={handleActivatedForm}>
                <p className='todo-form-title'>add your todo</p>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
            <div className={`todo-form-bottom ${isActive && 'form-bottom-active'}`}>
                <form 
                className="todo-form"
                onSubmit={handleSubmit(send)}>
                    <div className='todo-form-divider'>
                        {/* label */}
                        <label className='todo-form-label'>title your todo</label>
                        {/* title */}
                        <input 
                        type="text" 
                        name='title'
                        {...register('name')}
                        placeholder='write title'
                        className='todo-input'/>    
                    </div>
                    <div className="todo-form-divider">
                        <label className='todo-form-label'>description your todo</label>
                        {/* description */}
                        <textarea 
                        name='description'
                        {...register('description')}
                        placeholder='write description'
                        className='todo-textarea'></textarea>
                    </div>
                    {/* send */}
                    <button className='todo-btn'>send</button>
                </form>
            </div>
        </div>
    )
};

export default TodosForm;
