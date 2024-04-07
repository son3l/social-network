import {legacy_createStore as createStore, combineReducers} from 'redux';
import {ProfilePostReducer} from "./Reducers/ProfilePostReducer";
import {DialogReducer} from "./Reducers/DialogReducer";
import {UsersReducer} from "./Reducers/UsersReducer";

export let reduxStore = createStore(
    combineReducers(
        {profile: ProfilePostReducer, dialog: DialogReducer,users:UsersReducer}
    )
);

