import {stateType} from "../../ReduxStore";

export const getFollowProgress = (state: stateType): boolean => {
    return state.users.followProgress;
}