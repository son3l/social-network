import {stateType} from "../../ReduxStore";

export const getTotalCount = (state: stateType): number => {
    return state.users.totalUsersCount;
}