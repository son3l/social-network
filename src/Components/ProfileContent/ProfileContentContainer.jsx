import {connect} from "react-redux";
import {ProfileContentClass} from "./ProfileContentClass";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {
    fetchStatusThunkCreator,
    getProfileThunkCreator,
    saveFileThunkCreator, saveProfileThunkCreator
} from "../../Redux/Reducers/ProfilePostReducer";
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
            status: state.profile.status,
            id: state.auth.userId
        }
    },
    (dispatch) => {
        return {
            getProfileThunkCreator: (profileId)=>{
                getProfileThunkCreator(profileId)(dispatch);
            },
            fetchStatusThunkCreator: (data)=>{
                fetchStatusThunkCreator(data)(dispatch);
            },
            saveFileThunkCreator: (file)=>{
                saveFileThunkCreator(file)(dispatch);
            },
            saveProfileThunkCreator: (formData)=>{
                saveProfileThunkCreator(formData)(dispatch);
            }
        }
    }
)(withRouter(authHoc(ProfileContentClass)));
