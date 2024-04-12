import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {ProfilePostReducer} from "./Reducers/ProfilePostReducer";
import {DialogReducer} from "./Reducers/DialogReducer";
import {UsersReducer} from "./Reducers/UsersReducer";
import {authReducer} from "./Reducers/AuthReducer";
import {thunk} from "redux-thunk";
import {reducer as FormReducer} from "redux-form";

export let reduxStore = createStore(
    combineReducers(
        {profile: ProfilePostReducer,
            dialog: DialogReducer,
            users: UsersReducer,
            auth: authReducer,
            form: FormReducer

        }
    ), applyMiddleware(thunk)
);

