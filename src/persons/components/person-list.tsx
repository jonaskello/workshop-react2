import * as React from "react";
import { PersonItem } from "../types";
import * as PersonsActions from "../actions";

export interface Props {
    persons: Array<PersonItem>,
    newPerson: string,
    dispatch: any,
    color: string,
}

export function PersonList({color, persons, newPerson, dispatch}: Props) {
    return (
        <div style={{background: color}}>
            Number of persons: {persons.length}
            {persons.map((person) => <div key={person.key}>{person.description}</div>)}
            <input type="text"
                value={newPerson}
                onChange={(event) => dispatch(PersonsActions.createUpdateNewPersonAction(event.target.value))} />
            <button onClick={() => dispatch(PersonsActions.createAddPersonAction())}>Add person</button>
        </div>
    );
}