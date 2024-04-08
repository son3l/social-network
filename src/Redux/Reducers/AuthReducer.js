let initState={
    userId:null,
    email:null,
    login:null,
    isAuth:false,
    profile:null
}
export const authReducer = (state=initState,action)=>{
    switch (action.type){
        case('set-user-data'): {

            return{
                ...state, ...action.data, isAuth: true
            }
        }
        case('set-user-profile'):{

            return{
                ...state, profile:{...action.user}
            }
        }
        default:
            return{...state}
    }
}