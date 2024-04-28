import {fetchFollow, fetchUser} from "../../Api/api";
import {ActionUserType, InitState} from "../../Utils/Types/Types";

let user: InitState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followProgress: false
}
export const UsersReducer = (state = user, action: ActionUserType): InitState => {
    switch (action.type) {
        case('follow'): {
            return (
                {
                    ...state,
                    // eslint-disable-next-line array-callback-return
                    users: state.users.map((user) => {
                        if (user.id === action.id) {
                            return {...user, followed: !user.followed};
                        } else {
                            return {...user};
                        }
                    })
                }
            )
        }
        case('follow-progress'): {
            return {
                ...state, followProgress: !state.followProgress
            }
        }
        case('set-users'): {
            return {...state, users: [...action.users], totalUsersCount: action.count};
        }
        case('set-page'): {
            return {...state, currentPage: action.page}
        }
        case('fetch'): {
            return {...state, isFetching: !state.isFetching}
        }
        default: {
            return {...state};
        }
    }
}

export const getUsersThunkCreator = (page: number, count: number): Function => {
    return (dispatch: Function): void => {
        dispatch({type: 'fetch'});
        fetchUser(page, count).then(res => {
            dispatch({type: 'fetch'});
            dispatch({type: 'set-users', users: res.items, count: res.totalCount});
        });
    }
}
export const followThunkCreator = (followed: boolean, id: number): Function => {
    return (dispatch: Function): void => {
        dispatch({type: 'follow-progress'});
        fetchFollow(followed, id).then(res => {
            if (res)
                dispatch({type: 'follow', id: id});
        });
        dispatch({type: 'follow-progress'})
    }
}