import {connect} from "react-redux";
// @ts-ignore
import {UserBarClass} from "./UserBarClass.tsx";
// @ts-ignore
import {followThunkCreator, getUsersThunkCreator} from "../../Redux/Reducers/UsersReducer.ts";
// @ts-ignore
import {authHoc} from "../Hoc/AuthRedirect.tsx";
// @ts-ignore
import {getUsers} from "../../Redux/Selectors/Users/getUsers.ts";
// @ts-ignore
import {getPageSize} from "../../Redux/Selectors/Users/getPageSize.ts";
// @ts-ignore
import {getTotalCount} from "../../Redux/Selectors/Users/getTotalCount.ts";
// @ts-ignore
import {getCurrentPage} from "../../Redux/Selectors/Users/getCurrentPage.ts";
// @ts-ignore
import {getIsFetching} from "../../Redux/Selectors/Users/getIsFetching.ts";
// @ts-ignore
import {getFollowProgress} from "../../Redux/Selectors/Users/getFollowProgress.ts";
// @ts-ignore
import {getIsAuth} from "../../Redux/Selectors/Users/getIsAuth.ts";
import {stateType} from "../../Redux/ReduxStore";

export const UserBarContainer = connect(
    (state: stateType) => {
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
                follow: (id: number): void => {
                    dispatch({type: 'follow', id: id})
                },
                setPage: (page: number): void => {
                    dispatch({type: 'set-page', page: page})
                },
                getUsersThunkCreator: (page: number, count: number): void => {
                    getUsersThunkCreator(page, count)(dispatch)
                },
                followThunkCreator: (followed: boolean, id: number): void => {
                    followThunkCreator(followed, id)(dispatch)
                }

            }
        )
    }
)(authHoc(UserBarClass));