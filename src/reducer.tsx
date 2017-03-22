import * as Store from "./store";
import * as TodosReducer from "./todos/reducer";
import * as PersonsReducer from "./persons/reducer";

export interface RootState {
    todos: TodosReducer.TodosState,
    persons: PersonsReducer.PersonsState
}

export function reduce(state: RootState, action: any): RootState {

    return {
        todos: TodosReducer.reduce(state.todos, action),
        persons: PersonsReducer.reduce(state.persons, action),
    };
}
