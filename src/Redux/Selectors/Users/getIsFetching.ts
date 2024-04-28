import {stateType} from "../../ReduxStore";

export const getIsFetching = (state: stateType): boolean => {
    return state.users.isFetching;
}