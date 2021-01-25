import { usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const CHANGE_USER_STATUS='CHANGE_USER_STATUS'


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
                ...action.data
            }
        case CHANGE_USER_STATUS:
            return {
                ...state,isAuth:true
            }
        default:
            return state;

    }
}
export const setUserData = (userId,email,login) =>({type:'SET_USER_DATA',data:{userId,email,login}})

export const changeUserStatus = () =>({type:'CHANGE_USER_STATUS'})

export const getUsersData = () =>{
    return (dispatch) =>{
        usersAPI.getUserData().then(data=>{
            let {id,email,login} = data.data
            dispatch(setUserData(id,email,login))
            if (data.resultCode === 0){
                dispatch(changeUserStatus())
            }
        })
}
}

export default authReducer;