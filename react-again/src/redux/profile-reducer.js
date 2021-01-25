import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SET_USER_PROFILE = 'SET_USER_PROFILE'

const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id:1,name:'Aqil',likeCount:15},
        {id:2,name:'Elman',likeCount:20},
        {id:3,name:'Eli',likeCount:25},
        {id:4,name:'Fexi',likeCount:30}],
    profile: null,
    status:''
}

const profileReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,{id:5,name: action.myPost,likeCount:31}],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText
            }
        case SET_USER_PROFILE:
            return { ...state, profile:action.profile }
        case SET_STATUS:
            return {...state,status:action.status}
        default:
            return state;

    }
}
// export const addPostActionCreator = () =>({type:'ADD-POST'})

export const updateNewPostActionCreator = (text) =>({type:'UPDATE-NEW-POST-TEXT',newText:text})

export const setUserProfile = (profile) =>({type:'SET_USER_PROFILE', profile})

export const setStatus = (status) =>({type:'SET_STATUS',status})

export const addPost = (myPost) => ({type:'ADD-POST',myPost})

export const getProfile = (userId) =>{
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(data =>{
            dispatch(setUserProfile(data))
        })
}
}

export const getProfileStatus = (userId) =>{
    return (dispatch) =>{
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status).then(response=>{
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer;