import {connect} from "react-redux";
// @ts-ignore
import {ProfileContentClass} from "./ProfileContentClass.tsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import {fetchStatusThunkCreator, getProfileThunkCreator, saveFileThunkCreator, saveProfileThunkCreator} from "../../Redux/Reducers/ProfilePostReducer.ts";
// @ts-ignore
import {authHoc} from "../Hoc/AuthRedirect.tsx";
import {stateType} from "../../Redux/ReduxStore";

export const withRouter = (Component: any) => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}
export const ProfileContentContainer = connect(
    (state: stateType) => {
        return {
            profile: state.profile.profile,
            isAuth: state.auth.isAuth,
            status: state.profile.status,
            id: state.auth.userId,
            saveProfile: state.profile.saveProfile
        }
    },
    (dispatch) => {
        return {
            getProfileThunkCreator: (profileId: number) => {
                getProfileThunkCreator(profileId)(dispatch);
            },
            fetchStatusThunkCreator: (data: any) => {
                fetchStatusThunkCreator(data)(dispatch);
            },
            saveFileThunkCreator: (file: any) => {
                saveFileThunkCreator(file)(dispatch);
            },
            saveProfileThunkCreator: (formData: any) => {
                saveProfileThunkCreator(formData)(dispatch);
            },
            editProfile: () => {
                dispatch({type: 'set-save-profile'});
            }
        }
    }
)(withRouter(authHoc(ProfileContentClass)));
