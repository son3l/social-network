import axios from "axios";

export const fetchUser = (page, count) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, {withCredentials: true})
        .then(res => {
            return (res.data);
        });
};
export const fetchProfile = (profileId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
        .then(res => {
            return (res.data);
        });
};
export const fetchFollow = (follow, id) => {
    if (follow) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {'API-KEY': '43727460-6c20-4e37-879b-0c62e4861fde'}
        }).then(res => {
            return res.data.resultCode === 0;
        })
    } else {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': '43727460-6c20-4e37-879b-0c62e4861fde'}
        }).then(res => {
            return res.data.resultCode === 0
        })
    }
};

export const fetchStatus = (data) => {
    // eslint-disable-next-line default-case
    switch (data.action) {
        case('get'): {
            return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${data.id}`)
                .then((res) => {

                    return res.data
                })
        }
        case('put'): {

            return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: data.status}, {
                withCredentials: true,
                headers: {'API-KEY': '43727460-6c20-4e37-879b-0c62e4861fde'}
            }).then((res) => {
                return data.status
            })

        }
    }
}
export const fetchPhoto = (file) => {
    let data = new FormData();
    data.append('image', file)
    return axios.put('https://social-network.samuraijs.com/api/1.0/profile/photo',
        data,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

}

export const fetchLogin = (data) => {
    if (data.type)
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',
            {email: data.email, password: data.password, rememberMe: data.rememberMe, captcha: data.captcha});
    return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login');
}
export const fetchInfoProfile = (formData) => {
    return axios.put('https://social-network.samuraijs.com/api/1.0/profile', {
        userId: formData.userId,
        aboutMe:formData.aboutMe,
        lookingForAJob: formData.lookingForAJob,
        lookingForAJobDescription: formData.lookingForAJobDescription,
        fullName: formData.fullName,
        contacts: {
            github: formData.github,
            vk: formData.vk,
            facebook: formData.facebook,
            instagram: formData.instagram,
            twitter: formData.twitter,
            website: formData.website,
            youtube: formData.youtube,
            mainLink: formData.mainLink
        }
    }, {withCredentials: true})
}
export const fetchCaptcha =()=>{
    return axios.get('https://social-network.samuraijs.com/api/1.0/security/get-captcha-url');
}