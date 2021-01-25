import { Redirect } from "react-router-dom"
import { authAPI, usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


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
const setUserData = (userId,email,login,isAuth) =>({type:'SET_USER_DATA',payload:{userId,email,login,isAuth}})


export const getUsersData = () =>{
    return (dispatch) =>{
        usersAPI.getUserData().then(data=>{
            if (data.resultCode === 0){
                let {id,email,login} = data.data
                dispatch(setUserData(id,email,login,true))
            }
        })
}
}
export const authoriseMe = (formData) =>(dispatch) =>{
    authAPI.authorise(formData).then(response=>{
        console.log(response.data)
        if (response.data.resultCode === 0){
        //    let userId = response.data.data.userId
            dispatch(getUsersData())
        }
    })

}
export const logout = () => (dispatch) =>{
    authAPI.logout().then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null,false))
            console.log('dsfdsf')
        }
    })
}

export default authReducer;