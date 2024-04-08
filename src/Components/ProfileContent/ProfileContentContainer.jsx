import {connect} from "react-redux";
import {ProfileContentClass} from "./ProfileContentClass";
import {useLocation, useNavigate, useParams} from "react-router-dom";
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
            profile: state.profile.profile
        }
    },
    (dispatch) => {
        return {
// eslint-disable-next-line no-unused-expressions
            setProfile: (profile) => {
                dispatch({type: 'set-profile', profile: profile})
            }
        }
    }
)(withRouter(ProfileContentClass));
