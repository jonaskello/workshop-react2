import * as React from "react";
import { PersonItem } from "../types";

export interface Props {
    person: PersonItem,
}

export function todoItem({person}: Props): React.ReactElement<Props> {
    return (
        <div key={person.key}>{person.description}</div>
    );
}
