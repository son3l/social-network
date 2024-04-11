import {connect} from "react-redux";
import {ProfileContentClass} from "./ProfileContentClass";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {fetchStatusThunkCreator, getProfileThunkCreator} from "../../Redux/Reducers/ProfilePostReducer";
import {authHoc} from "../Hoc/AuthRedirect";
 export const withRouter = (Component)=> {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
     return ComponentWithRouterProp;
 }
export const ProfileContentContainer = connect(
    (state) => {
        return {
            profile: state.profile.profile,
            isAuth: state.auth.isAuth,
            status: state.profile.status
        }
    },
    (dispatch) => {
        return {
// eslint-disable-next-line no-unused-expressions
            setProfile: (profile) => {
                dispatch({type: 'set-profile', profile: profile})
            },
            getProfileThunkCreator: (profileId)=>{
                getProfileThunkCreator(profileId)(dispatch);
            },
            fetchStatusThunkCreator: (data)=>{
                fetchStatusThunkCreator(data)(dispatch);
            }
        }
    }
)(withRouter(authHoc(ProfileContentClass)));
