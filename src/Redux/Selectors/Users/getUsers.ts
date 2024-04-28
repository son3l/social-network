import {stateType} from "../../ReduxStore";

export const getUsers = (state: stateType): Array<any>=>{
    return state.users.users;
}