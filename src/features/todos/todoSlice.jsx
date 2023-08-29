import { createSlice } from "@reduxjs/toolkit";

const todosLS = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = todosLS;

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers : {
        // agregar tareas o todos
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        // eliminar tareas o todos
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id != action.payload);
        },
    },
});

// exportando las funciones
export const {addTodo, deleteTodo} = todoSlice.actions;

// exportando el todoSlice
export default todoSlice.reducer;