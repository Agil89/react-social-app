import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT ='SET_USERS_COUNT'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users:[],
    usersCount:200,
    usersForEachPage:10,
    currentPage:5,
    isFetching:false,
    followingInProgress:[]
}

const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                users:state.users.map(u =>{
                    if(u.id === action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u =>{
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state,users: [ ...action.users ]}
        case SET_CURRENT_PAGE:
            return { ...state,currentPage : action.currentPage}
        case SET_USERS_COUNT:
            return { ...state,usersCount : action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state,isFetching : action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return { ...state, followingInProgress : action.followingProgress 
                ? [...state.followingInProgress,action.userId]
                : state.followingInProgress.filter(id=> id != action.userId)}
        default:
            return state;

    }
}

export const followAccept = (userId) =>({type:'FOLLOW',userId})

export const unfollowAccept = (userId) =>({type:'UNFOLLOW', userId})

export const setUsers = (users) =>({type:'SET_USERS',users})

export const setCurrentPage= (currentPage) =>({type:'SET_CURRENT_PAGE',currentPage})

export const setUsersCount = (totalCount) =>({type:'SET_USERS_COUNT',count:totalCount})

export const changeIsFetching= (isFetching) =>({type:'TOGGLE_IS_FETCHING',isFetching})

export const followingToggle = (followingProgress,userId) =>({type: 'TOGGLE_IS_FOLLOWING', followingProgress,userId})

export const getUsers = (currentPage,usersForEachPage) =>{
    return (dispatch) =>{
        dispatch(changeIsFetching(true))
        usersAPI.getUsers(currentPage,usersForEachPage).then(data =>{
            dispatch(setUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
            dispatch(changeIsFetching(false))
    })
} 

}

export const getUsersWithSettingPage = (page,usersForEachPage) =>{
    return (dispatch) =>{
        dispatch(setCurrentPage(page));
        dispatch(changeIsFetching(true))
            usersAPI.getUsers(page,usersForEachPage).then(data =>{
                dispatch(setUsers(data.items))
                dispatch(changeIsFetching(false))
        })
    }
}

export const follow = (userId) =>{
    return (dispatch) =>{
        dispatch(followingToggle(true,userId))
        usersAPI.followUsers(userId).then(data =>{
              if(data.resultCode == 0){
                 dispatch(followAccept(userId))
              }
              dispatch(followingToggle(false,userId))
    })
}
}
export const unfollow = (userId) =>{
    return (dispatch) =>{
        dispatch(followingToggle(true,userId)) 
usersAPI.unfollowUsers(userId).then(data =>{
        if(data.resultCode == 0){
        dispatch(unfollowAccept(userId))
        }
        dispatch(followingToggle(false,userId))
    })
}
}



export default userReducer;