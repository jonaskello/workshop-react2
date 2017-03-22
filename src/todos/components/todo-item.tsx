import * as React from "react";
import { TodoItem } from "../types";
import { createRemoveTodoAction } from "../actions";

export interface Props {
    todo: TodoItem,
    dispatch: any,
}

export function todoItem({todo, dispatch}: Props): React.ReactElement<Props> {
    return (
        <div key={todo.key}><button onClick={() => dispatch(createRemoveTodoAction(todo.key))}>X</button> {todo.description}</div>
    );
}
