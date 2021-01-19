const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        {id:1,name:'Aqil',likeCount:15},
        {id:2,name:'Elman',likeCount:20},
        {id:3,name:'Eli',likeCount:25},
        {id:4,name:'Fexi',likeCount:30}],
    newPostText:''
}

const profileReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                newPostText:'',
                posts: [...state.posts,{id:5,name: state.newPostText,likeCount:31}],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText
            }
        default:
            return state;

    }
}
export const addPostActionCreator = () =>({type:'ADD-POST'})

export const updateNewPostActionCreator = (text) =>({type:'UPDATE-NEW-POST-TEXT',newText:text})

export default profileReducer;