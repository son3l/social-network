import {stateType} from "../../ReduxStore";

export const getCurrentPage = (state: stateType): number => {
    return state.users.currentPage;
}