import {stateType} from "../../ReduxStore";

export const getIsAuth = (state: stateType): boolean => {
    return state.auth.isAuth;
}