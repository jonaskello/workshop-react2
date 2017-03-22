export type Action = UpdateNewTodoAction | AddTodoAction | RemoveTodoAction;

export interface UpdateNewTodoAction {
    type: "UpdateNewTodoAction",
    payload: string,
}

export interface AddTodoAction {
    type: "AddTodoAction",
}

export interface RemoveTodoAction {
    type: "RemoveTodoAction",
    payload: number,
}

export function createUpdateNewTodoAction(value: string): UpdateNewTodoAction {
    return { type: "UpdateNewTodoAction", payload: value }
}

export function createAddTodoAction(): AddTodoAction {
    return { type: "AddTodoAction" }
}

export function createRemoveTodoAction(key: number): RemoveTodoAction {
    return { type: "RemoveTodoAction", payload: key }
}
