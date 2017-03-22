import * as React from "react";
import * as Store from "../store";
import * as TodosReducer from "./reducer";
import * as TodosActions from "./actions";
import { todoItem } from "./components/todo-item";
import { TodoItem } from "./types";
import { createContainer } from "../create-container";
import { RootState } from "../reducer";
import { TodosState } from "./reducer";

export interface TodosProps {
}

function mapPropsToState(props: TodosProps, state: RootState): TodosState {
    return state.todos;
}

export const TodosContainer = createContainer(TodosComponent, mapPropsToState);

function TodosComponent(props: TodosProps): React.ReactElement<TodosProps> {

    console.log("NU RITAS TodosComponent");

    return (
        <div>
            Number of todos: {Store.getState().todos.todos.length}
            {Store.getState().todos.todos.map((todo: TodoItem) => todoItem({todo, dispatch: Store.dispatch}))}
            <input type="text"
                value={Store.getState().todos.newTodo}
                onChange={(event) => Store.dispatch(TodosActions.createUpdateNewTodoAction(event.target.value))} />
            <button onClick={() => Store.dispatch(TodosActions.createAddTodoAction())}>Add todo</button>

        </div>
    );
}

