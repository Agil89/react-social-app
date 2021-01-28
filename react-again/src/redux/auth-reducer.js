import { authAPI, usersAPI } from "../api/api"
import {stopSubmit} from 'redux-form'
const SET_USER_DATA = 'my-app/auth/SET_USER_DATA'


let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
       
        default:
            return state;

    }
}
const setUserData = (userId,email,login,isAuth) =>({type:'my-app/auth/SET_USER_DATA',payload:{userId,email,login,isAuth}})


export const getUsersData = () =>{
        return async (dispatch) =>{
     let data = await usersAPI.getUserData()
        if (data.resultCode === 0){
            let {id,email,login} = data.data
            dispatch(setUserData(id,email,login,true))
        }
}
}
export const authoriseMe = (formData) => async (dispatch) =>{
    let response = await authAPI.authorise(formData)
        if (response.data.resultCode === 0){
            dispatch(getUsersData())
        } else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Authorisation error"
            dispatch(stopSubmit("login",{_error:message}))
        }
}
export const logout = () => async (dispatch) =>{
    let response =  await authAPI.logout()
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null,false))
            console.log('dsfdsf')
        }
}

export default authReducer;