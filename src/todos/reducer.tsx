import * as Store from "../store";
import * as Actions from "./actions";
import { TodoItem } from "./types";

export interface TodosState {
    newTodo: string,
    nextTodoKey: number,
    todos: Array<TodoItem>,
}

export const initialState = {
    newTodo: "New todo",
    nextTodoKey: 3,
    todos: [
        { key: 1, description: "Learn react" },
        { key: 2, description: "Setup webpack" }
    ]
};

export function reduce(state: TodosState = initialState, action: Actions.Action): TodosState {

    switch (action.type) {
        case "UpdateNewTodoAction":
            return {
                ...state,
                newTodo: action.payload,
            };
        case "AddTodoAction":
            return {
                ...state,
                nextTodoKey: state.nextTodoKey + 1,
                todos: [...state.todos, { key: state.nextTodoKey, description: state.newTodo }]
            };
        case "RemoveTodoAction":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.key != action.payload),
            };
        default:
            const exhaustiveCheck: never = action;
            return state;
    }

}
