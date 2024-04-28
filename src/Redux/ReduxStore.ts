import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
// @ts-ignore
import {ProfilePostReducer} from "./Reducers/ProfilePostReducer.ts";
// @ts-ignore
import {DialogReducer} from "./Reducers/DialogReducer.ts";
// @ts-ignore
import {UsersReducer} from "./Reducers/UsersReducer.ts";
// @ts-ignore
import {authReducer} from './Reducers/AuthReducer.ts';
import {thunk} from "redux-thunk";
import {reducer as FormReducer} from "redux-form";

const reducers = combineReducers(
    {
        profile: ProfilePostReducer,
        dialog: DialogReducer,
        users: UsersReducer,
        auth: authReducer,
        form: FormReducer
    });
export type stateType = ReturnType<typeof reducers>;
export let reduxStore = createStore(reducers, applyMiddleware(thunk));

