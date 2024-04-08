import {connect} from "react-redux";
import {UserBar} from "./UserBar";
import {UserBarClass} from "./UserBarClass";

export const UserBarContainer = connect(
    (state) => {
        return (
            {
                users: state.users.users,
                pageSize: state.users.pageSize,
                totalCount: state.users.totalUsersCount,
                currentPage: state.users.currentPage,
                isFetching: state.users.isFetching,
                followProgress: state.users.followProgress
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
                followProgressF: ()=>{
                    dispatch({type:'follow-progress'})
                }

            }
        )
    }
)(UserBarClass)