import {connect} from "react-redux";
import {UserBar} from "./UserBar";
import {UserBarClass} from "./UserBarClass";
import {followThunkCreator, getUsersThunkCreator} from "../../Redux/Reducers/UsersReducer";
import {authHoc} from "../Hoc/AuthRedirect";
import {getUsers} from "../../Redux/Selectors/Users/getUsers";
import {getPageSize} from "../../Redux/Selectors/Users/getPageSize";
import {getTotalCount} from "../../Redux/Selectors/Users/getTotalCount";
import {getCurrentPage} from "../../Redux/Selectors/Users/getCurrentPage";
import {getIsFetching} from "../../Redux/Selectors/Users/getIsFetching";
import {getFollowProgress} from "../../Redux/Selectors/Users/getFollowProgress";
import {getIsAuth} from "../../Redux/Selectors/Users/getIsAuth";

export const UserBarContainer = connect(
    (state) => {
        return (
            {
                users: getUsers(state),
                pageSize: getPageSize(state),
                totalCount: getTotalCount(state),
                currentPage: getCurrentPage(state),
                isFetching: getIsFetching(state),
                followProgress: getFollowProgress(state),
                isAuth: getIsAuth(state)
            }
        )
    },
    (dispatch) => {
        return (
            {
                follow: (id) => {
                    dispatch({type: 'follow', id: id})
                },
                setUsers: (users, count) => {
                    dispatch({type: 'set-users', users: users, count: count})
                },
                setPage: (page) => {
                    dispatch({type: 'set-page', page: page})
                },
                fetching: () => {
                    dispatch({type: 'fetch'})
                },
                followProgressF: () => {
                    dispatch({type: 'follow-progress'})
                },
                getUsersThunkCreator: (page, count) => {
                    getUsersThunkCreator(page, count)(dispatch)
                },
                followThunkCreator: (followed, id) => {
                    followThunkCreator(followed, id)(dispatch)
                }

            }
        )
    }
)(authHoc(UserBarClass));