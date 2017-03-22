import * as React from "react";
import * as PersonsReducer from "./reducer";
import * as PersonsActions from "./actions";
import { PersonList } from "./components/person-list";
import { PersonsState } from "./reducer";
import { RootState } from "../reducer";
import { createContainer } from "../create-container";

export interface OwnProps {
    color: string,
}

export interface StateProps {
    state: PersonsState,
    dispatch: any,
}

export type Props = OwnProps & StateProps;

function mapPropsToState(props: OwnProps, state: RootState) {
    return state.persons;
}

export const PersonsContainer = createContainer(PersonsComponent, mapPropsToState);

function PersonsComponent({ state, dispatch, color }: Props) {
    
    console.log("NU RITAS PersonsComponent");
    return (
        <PersonList dispatch={dispatch}
            persons={state.persons}
            newPerson={state.newPerson}
            color={color} />
    );

}
