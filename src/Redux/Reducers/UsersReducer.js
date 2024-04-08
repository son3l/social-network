let user = {
    users: [/*
        {id: 1, followed: true, name: 'Bla Bla', about: 'qwerty', location: {city: 'blablaland', country: 'ddd'}},
        {id: 2, followed: false, name: 'abooba', about: 'abooba', location: {city: 'blablaland2', country: 'ddd2'}}
   */],
    pageSize:20,
    totalUsersCount:1,
    currentPage:1,
    isFetching: false,
    followProgress: false
}
export const UsersReducer = (state = user, action) => {
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
        case('follow-progress'):{
            return {
                ...state, followProgress: !state.followProgress
            }
        }
        case('set-users'): {
            return {...state, users: [ ...action.users], totalUsersCount: action.count};
        }
        case('set-page'):{
            return {...state, currentPage: action.page}
        }
        case('fetch'):{
            return {...state, isFetching:!state.isFetching}
        }
        default: {
            return {...state};
        }
    }
}