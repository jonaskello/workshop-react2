import * as React from "react";
import * as Store from "./store";
import { TodosContainer } from "./todos/container";
import { PersonsContainer } from "./persons/container";

export interface RootProps {
}

export function RootComponent(props: RootProps): React.ReactElement<RootProps> {
    return (
        <div>
            <span>TODOS:</span>
            <TodosContainer />
            <span>PERSONS:</span>
            <PersonsContainer color="yellow" />
        </div>
    );
}

