import {stateType} from "../../ReduxStore";

export const getPageSize = (state: stateType): number => {
    return state.users.pageSize;
}