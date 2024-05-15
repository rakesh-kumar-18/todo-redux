import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface TodoState {
    todos: Array<{
        id: string;
        text: string;
    }>;
}

const initialState: TodoState = {
    todos: [
        {
            id: nanoid(),
            text: "Hello"
        }
    ]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        updateTodo(state, action: PayloadAction<string>) {
            const matchedTodo = state.todos.find(todo => todo.id === action.payload);
            matchedTodo && (matchedTodo.text = action.payload);
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;