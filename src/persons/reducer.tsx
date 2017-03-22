import * as Store from "../store";
import * as Actions from "./actions";
import { PersonItem } from "./types";

export interface PersonsState {
    newPerson: string,
    nextPersonKey: number,
    persons: Array<PersonItem>,
}

const initialState = {
    newPerson: "New person",
    nextPersonKey: 3,
    persons: [
        { key: 1, description: "Steve Jobs" },
        { key: 2, description: "Bill Gates" }
    ]
};

export function reduce(state: PersonsState = initialState, action: Actions.Action): PersonsState {

    switch (action.type) {
        case "UpdateNewPersonAction":
            return {
                ...state,
                newPerson: action.payload,
            };
        case "AddPersonAction":
            return {
                ...state,
                nextPersonKey: state.nextPersonKey + 1,
                persons: [...state.persons, { key: state.nextPersonKey, description: state.newPerson }]
            };
        default:
            const exhaustiveCheck: never = action;
            return state;
    }

}
