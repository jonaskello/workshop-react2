export type Action = UpdateNewPersonAction | AddPersonAction;

export interface UpdateNewPersonAction {
    type: "UpdateNewPersonAction",
    payload: string,
}

export interface AddPersonAction {
    type: "AddPersonAction",
}

export function createUpdateNewPersonAction(value: string): UpdateNewPersonAction {
    return { type: "UpdateNewPersonAction", payload: value }
}

export function createAddPersonAction(): AddPersonAction {
    return { type: "AddPersonAction" }
}
