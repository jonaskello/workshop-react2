import * as TodosReducer from "./todos/reducer";
import * as PersonsReducer from "./persons/reducer";
import * as RootReducer from "./reducer";

let state: RootReducer.RootState = {
    todos: undefined,
    persons: undefined,
};

let callback: () => void;

export function subscribe(c: () => void) {
    callback = c;
}

export function dispatch(action: any): void {
    console.log("BEFORE", state);
    console.log("DISPATCH: ", action);
    const newState = RootReducer.reduce(getState(), action);
    state = newState;
    console.log("AFTER", newState);
    if (callback)
        callback();
}

export function getState(): RootReducer.RootState {
    return state;
}
