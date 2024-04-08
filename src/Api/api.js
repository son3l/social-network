import axios from "axios";

export const fetchUser = (page, count) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, {withCredentials: true})
       .then(res => {
           return (res.data);
       });
};
export const fetchProfile = (profileId) => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
        .then(res=>{
            return(res.data);
        });
};
export const fetchFollow=(follow,id)=>{
    if (follow) {
       return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {'API-KEY':'43727460-6c20-4e37-879b-0c62e4861fde'}
        }).then(res=>{
            return res.data.resultCode===0;
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
