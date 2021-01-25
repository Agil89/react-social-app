import * as axios from 'axios'
import { logout } from '../redux/auth-reducer'


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "55dbd607-c8fe-40e8-9d9e-3d0cc753cb35"
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage,usersForEachPage){
       return instance.get(`users?page=${currentPage}&count=${usersForEachPage}`).then(response =>{
            return response.data
    })
    },
    unfollowUsers(userId){
        return instance.delete(`follow/${userId}`).then(response=>{
            return response.data
        })
    },
    followUsers(userId){
        return instance.post(`follow/${userId}`).then(response=>{
            return response.data
            
        })
       
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response =>{
            return response.data
        })
    },
    getUserData(){
        return instance.get(`auth/me`).then(response =>{
            return response.data
        })
    }
}

export const profileAPI ={
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status})
    }
}

export const authAPI ={
    authorise(formData){
        return instance.post(`auth/login`,{email:formData.email,
            password:formData.password,rememberMe:formData.rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}