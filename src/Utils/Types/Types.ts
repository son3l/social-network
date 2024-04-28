export type initStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    profile: Object | null,
    photo: Object | null,
    captcha: string | null
};

export type ActionType = {
    type: string,
    data?: Object,
    user?: Object,
    isAuth?: boolean,
    photo?: Object,
    url?: string
};
export type LoginDataType = {
    type: boolean,
    email?: string,
    password?: string,
    rememberMe?: boolean,
    captcha?: string
};

export type dialogType = {
    messageData: Array<Object>,
    nameData: Array<Object>,
    createMessage: string | null
};

export type DialogActionType = {
    type: string,
    message?: string
};

export type ProfileDataType = {
    followed?: boolean;
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string
    },
    photos: null | {
        small: string | null,
        large: string | null
    }
};

export type profileType = {
    createPostValue: string,
    postData: Array<Object>,
    profile: null | ProfileDataType,
    status: null | string,
    saveProfile: boolean
};

export type ActionProfileType = {
    type: string,
    message?: string,
    post?: string,
    profile?: ProfileDataType,
    status?: string,
    photo?: { small: string, large: string | null }
};

export type InitState = {
    users: Array<any>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followProgress: boolean,
    followed?: boolean
};

export type ActionUserType = {
    type: string,
    id?: number,
    users?: Array<any>,
    count?: number,
    page?: number,
};