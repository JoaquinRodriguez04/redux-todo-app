import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import isFormReducer from '../features/isForm/isFormSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        isForm: isFormReducer,
    }
});


